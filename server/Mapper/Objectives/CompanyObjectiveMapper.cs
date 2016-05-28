using Mapper.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Mapper.Objectives
{
    public class CompanyObjectiveMapper
        : BaseCompanyMapper<Dmn.CompanyObjective>
    {
        public CompanyObjectiveMapper(DbSettings dbSettings)
            : base(dbSettings.ConnectionString)
        {
        }
    }
}