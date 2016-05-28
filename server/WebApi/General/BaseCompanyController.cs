using Domain.General;
using Microsoft.AspNet.Mvc;
using Service.General;
using Service.General.Dto;
using System.Collections.Generic;
using Vstack.Services.Mapper.General;
using Vstack.Services.Service.Converters;
using Vstack.Services.Service.Services;
using Vstack.Api.Web.General;

namespace WebApi.General
{
    public class BaseCompanyController<TDto, TDmn, TMapper, TConverter>
        : BaseController<TDto, TDmn, TMapper, TConverter>
        where TDto : class, ICompanyDto
        where TDmn : class, ICompanyDomain
        where TConverter : class, IDomainConverter<TDto, TDmn, Permissions>, new()
        where TMapper : IChildMapper<TDmn>
    {
        private BaseChildService<TDto, TDmn, TMapper, TConverter, Permissions> _Service;

        public BaseCompanyController(BaseChildService<TDto, TDmn, TMapper, TConverter, Permissions> service) : base(service)
        {
            this._Service = service.SetPermissions(this.GetPermissions());
        }

        [HttpPost("companies/{companyId:int}/[controller]")]
        public IActionResult Post(int companyId, [FromBody]TDto input)
        {
            return this.RestfulPost(this._Service.CreateForParent(companyId, input));
        }

        [HttpPost("companies/{companyId:int}/[controller]/bulk")]
        public IActionResult Post(int companyId, [FromBody]IEnumerable<TDto> input)
        {
            return this.RestfulPost(this._Service.CreateManyForParent(companyId, input));
        }

        [HttpGet("companies/{companyId:int}/[controller]")]
        public IActionResult Get(int companyId, [FromQuery][UrlArray]int[] ids)
        {
            return this.RestfulGet(this._Service.GetByParent(companyId, ids));
        }

        [HttpGet("companies/{companyId:int}/[controller]/{id:int}")]
        public IActionResult Get(int companyId, int id)
        {
            return this.RestfulGetSingle(this._Service.GetByParent(companyId, id));
        }

        [HttpPut("companies/{companyId:int}/[controller]/{id:int}")]
        public IActionResult Put(int companyId, int id, [FromBody]TDto input)
        {
            return this.RestfulPut(this._Service.UpdateIfInParent(companyId, id, input));
        }

        [HttpPut("companies/{companyId:int}/[controller]")]
        public IActionResult Put(int companyId, [FromBody]IEnumerable<TDto> input)
        {
            return this.RestfulPut(this._Service.UpdateManyIfInParent(companyId, input));
        }

        [HttpDelete("companies/{companyId:int}/[controller]/{id:int}")]
        public IActionResult Delete(int companyId, int id)
        {
            return this.RestfulDelete(this._Service.DeleteIfInParent(companyId, id));
        }

        [HttpDelete("companies/{companyId:int}/[controller]")]
        public IActionResult Delete(int companyId, [FromQuery][UrlArray]int[] ids)
        {
            return this.RestfulDelete(this._Service.DeleteManyIfInParent(companyId, ids));
        }
    }
}