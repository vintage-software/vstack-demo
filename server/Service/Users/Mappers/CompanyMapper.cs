using Service.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Users;

namespace Service.Users.Mappers
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