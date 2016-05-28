using Mapper.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Users;

namespace Mapper.Users
{
    public class CompanyMapper
        : BaseMapper<Dmn.Company>
    {
        public CompanyMapper(DbSettings dbSettings)
            : base(dbSettings.ConnectionString)
        {
        }
    }
}