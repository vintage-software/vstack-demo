using Mapper.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Users;

namespace Mapper.Users
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