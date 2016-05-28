using Mapper.Users;
using Service.Users.Converters;
using Service.Users.Services;
using WebApi.General;
using Dmn = Domain.Users;
using Dto = Service.Users.Dto;

namespace WebApi.Controllers.Users
{
    public class EmployeesController
        : BaseDepartmentController<Dto.Employee, Dmn.Employee, EmployeeMapper, EmployeeConverter>
    {
        public EmployeesController(EmployeeService service)
            : base(service)
        {
        }
    }
}