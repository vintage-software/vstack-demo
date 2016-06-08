using Service.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Mappers
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