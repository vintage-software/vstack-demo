using Mapper.Users;
using Service.Users.Converters;
using Service.Users.Services;
using WebApi.General;
using Dmn = Domain.Users;
using Dto = Service.Users.Dto;

namespace WebApi.Controllers.Users
{
    public class DepartmentsController
        : BaseCompanyController<Dto.Department, Dmn.Department, DepartmentMapper, DepartmentConverter>
    {
        public DepartmentsController(DepartmentService service)
            : base(service)
        {
        }
    }
}