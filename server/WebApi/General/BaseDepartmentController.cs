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
    public class BaseDepartmentController<TDto, TDmn, TMapper, TConverter>
        : BaseController<TDto, TDmn, TMapper, TConverter>
        where TDto : class, IDepartmentDto
        where TDmn : class, IDepartmentDomain
        where TConverter : class, IDomainConverter<TDto, TDmn, Permissions>, new()
        where TMapper : IDoubleChildMapper<TDmn>
    {
        private BaseDoubleChildService<TDto, TDmn, TMapper, TConverter, Permissions> _Service;

        public BaseDepartmentController(BaseDoubleChildService<TDto, TDmn, TMapper, TConverter, Permissions> service) : base(service)
        {
            this._Service = service.SetPermissions(this.GetPermissions());
        }

        [HttpPost("companies/{companyId:int}/departments/{departmentId:int}/[controller]")]
        public IActionResult Post(int companyId, int departmentId, [FromBody]TDto input)
        {
            return this.RestfulPost(this._Service.CreateForParent(companyId, departmentId, input));
        }

        [HttpPost("companies/{companyId:int}/departments/{departmentId:int}/[controller]/bulk")]
        public IActionResult Post(int companyId, int departmentId, [FromBody]IEnumerable<TDto> input)
        {
            return this.RestfulPost(this._Service.CreateManyForParent(companyId, departmentId, input));
        }

        [HttpGet("companies/{companyId:int}/departments/{departmentId:int}/[controller]")]
        public IActionResult Get(int companyId, int departmentId, [FromQuery][UrlArray]int[] ids)
        {
            return this.RestfulGet(this._Service.GetByParent(companyId, departmentId, ids));
        }

        [HttpGet("companies/{companyId:int}/departments/{departmentId:int}/[controller]/{id:int}")]
        public IActionResult Get(int companyId, int departmentId, int id)
        {
            return this.RestfulGetSingle(this._Service.GetByParent(companyId, departmentId, id));
        }

        [HttpPut("companies/{companyId:int}/departments/{departmentId:int}/[controller]/{id:int}")]
        public IActionResult Put(int companyId, int departmentId, int id, [FromBody]TDto input)
        {
            return this.RestfulPut(this._Service.UpdateIfInParent(companyId, departmentId, id, input));
        }

        [HttpPut("companies/{companyId:int}/departments/{departmentId:int}/[controller]")]
        public IActionResult Put(int companyId, int departmentId, [FromBody]IEnumerable<TDto> input)
        {
            return this.RestfulPut(this._Service.UpdateManyIfInParent(companyId, departmentId, input));
        }

        [HttpDelete("companies/{companyId:int}/departments/{departmentId:int}/[controller]/{id:int}")]
        public IActionResult Delete(int companyId, int departmentId, int id)
        {
            return this.RestfulDelete(this._Service.DeleteIfInParent(companyId, departmentId, id));
        }

        [HttpDelete("companies/{companyId:int}/departments/{departmentId:int}/[controller]")]
        public IActionResult Delete(int companyId, int departmentId, [FromQuery][UrlArray]int[] ids)
        {
            return this.RestfulDelete(this._Service.DeleteManyIfInParent(companyId, departmentId, ids));
        }
    }
}