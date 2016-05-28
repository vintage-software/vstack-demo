using Mapper.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Users;

namespace Mapper.Users
{
    public class DepartmentMapper
        : BaseCompanyMapper<Dmn.Department>
    {
        public DepartmentMapper(DbSettings dbSettings)
            : base(dbSettings.ConnectionString)
        {
        }
    }
}