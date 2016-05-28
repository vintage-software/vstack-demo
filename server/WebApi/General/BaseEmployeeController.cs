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
    public class BaseEmployeeController<TDto, TDmn, TMapper, TConverter>
        : BaseController<TDto, TDmn, TMapper, TConverter>
        where TDto : class, IEmployeeDto
        where TDmn : class, IEmployeeDomain
        where TConverter : class, IDomainConverter<TDto, TDmn, Permissions>, new()
        where TMapper : IDoubleChildMapper<TDmn>
    {
        private BaseDoubleChildService<TDto, TDmn, TMapper, TConverter, Permissions> _Service;

        public BaseEmployeeController(BaseDoubleChildService<TDto, TDmn, TMapper, TConverter, Permissions> service) : base(service)
        {
            this._Service = service.SetPermissions(this.GetPermissions());
        }

        [HttpPost("companies/{companyId:int}/employees/{employeeId:int}/[controller]")]
        public IActionResult Post(int companyId, int employeeId, [FromBody]TDto input)
        {
            return this.RestfulPost(this._Service.CreateForParent(companyId, employeeId, input));
        }

        [HttpPost("companies/{companyId:int}/employees/{employeeId:int}/[controller]/bulk")]
        public IActionResult Post(int companyId, int employeeId, [FromBody]IEnumerable<TDto> input)
        {
            return this.RestfulPost(this._Service.CreateManyForParent(companyId, employeeId, input));
        }

        [HttpGet("companies/{companyId:int}/employees/{employeeId:int}/[controller]")]
        public IActionResult Get(int companyId, int employeeId, [FromQuery][UrlArray]int[] ids)
        {
            return this.RestfulGet(this._Service.GetByParent(companyId, employeeId, ids));
        }

        [HttpGet("companies/{companyId:int}/employees/{employeeId:int}/[controller]/{id:int}")]
        public IActionResult Get(int companyId, int employeeId, int id)
        {
            return this.RestfulGetSingle(this._Service.GetByParent(companyId, employeeId, id));
        }

        [HttpPut("companies/{companyId:int}/employees/{employeeId:int}/[controller]/{id:int}")]
        public IActionResult Put(int companyId, int employeeId, int id, [FromBody]TDto input)
        {
            return this.RestfulPut(this._Service.UpdateIfInParent(companyId, employeeId, id, input));
        }

        [HttpPut("companies/{companyId:int}/employees/{employeeId:int}/[controller]")]
        public IActionResult Put(int companyId, int employeeId, [FromBody]IEnumerable<TDto> input)
        {
            return this.RestfulPut(this._Service.UpdateManyIfInParent(companyId, employeeId, input));
        }

        [HttpDelete("companies/{companyId:int}/employees/{employeeId:int}/[controller]/{id:int}")]
        public IActionResult Delete(int companyId, int employeeId, int id)
        {
            return this.RestfulDelete(this._Service.DeleteIfInParent(companyId, employeeId, id));
        }

        [HttpDelete("companies/{companyId:int}/employees/{employeeId:int}/[controller]")]
        public IActionResult Delete(int companyId, int employeeId, [FromQuery][UrlArray]int[] ids)
        {
            return this.RestfulDelete(this._Service.DeleteManyIfInParent(companyId, employeeId, ids));
        }
    }
}