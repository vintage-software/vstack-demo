using Service.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Users;

namespace Service.Users.Mappers
{
    public class EmployeeMapper
        : BaseDepartmentMapper<Dmn.Employee>
    {
        public EmployeeMapper(DbSettings dbSettings)
            : base(dbSettings.ConnectionString)
        {
        }
    }
}