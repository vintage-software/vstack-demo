using Domain.General;
using Mapper.General.Mappers;
using Microsoft.AspNet.Mvc;
using Service.General;
using Service.General.Dto;
using Service.General.Services;
using Vstack.Services.Service.Converters;
using Vstack.Api.Web.General;

namespace WebApi.General
{
    public class BaseCompanyAndDepartmentController<TDto, TDmn, TMapper, TConverter>
        : BaseController<TDto, TDmn, TMapper, TConverter>
        where TDto : class, IDepartmentDto
        where TDmn : class, IDepartmentDomain
        where TConverter : class, IDomainConverter<TDto, TDmn, Permissions>, new()
        where TMapper : ICompanyMapper<TDmn>, IDepartmentMapper<TDmn>
    {
        private BaseCompanyAndDepartmentService<TDto, TDmn, TMapper, TConverter, Permissions> _Service;

        public BaseCompanyAndDepartmentController(BaseCompanyAndDepartmentService<TDto, TDmn, TMapper, TConverter, Permissions> service)
            : base(service)
        {
            this._Service = service.SetPermissions(this.GetPermissions());
        }

        [HttpGet("companies/{companyId:int}/[controller]")]
        public IActionResult GetByCompanyObjective(int companyId, [FromQuery][UrlArray]int[] ids)
        {
            return this.RestfulGet(this._Service.GetByCompany(companyId, ids));
        }

        [HttpGet("companies/{companyId:int}/[controller]/{id:int}")]
        public IActionResult GetByCompanyObjective(int companyId, int id)
        {
            return this.RestfulGetSingle(this._Service.GetByCompany(companyId, id));
        }

        [HttpGet("companies/{companyId:int}/departments/{departmentId:int}/[controller]")]
        public IActionResult GetByDepartmentObjective(int companyId, int departmentId, [FromQuery][UrlArray]int[] ids)
        {
            return this.RestfulGet(this._Service.GetByDepartment(companyId, departmentId, ids));
        }

        [HttpGet("companies/{companyId:int}/departments/{departmentId:int}/[controller]/{id:int}")]
        public IActionResult GetByDepartmentObjective(int companyId, int departmentId, int id)
        {
            return this.RestfulGetSingle(this._Service.GetByDepartment(companyId, departmentId, id));
        }
    }
}