using Service.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Users;

namespace Service.Users.Mappers
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