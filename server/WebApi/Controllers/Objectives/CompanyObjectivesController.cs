using Service.Objectives.Converters;
using Service.Objectives.Mappers;
using Service.Objectives.Services;
using WebApi.General;
using Dmn = Domain.Objectives;
using Dto = Service.Objectives.Dto;

namespace WebApi.Controllers.Objectives
{
    public class CompanyObjectivesController
        : BaseCompanyController<Dto.CompanyObjective, Dmn.CompanyObjective, CompanyObjectiveMapper, CompanyObjectiveConverter>
    {
        public CompanyObjectivesController(CompanyObjectiveService service)
            : base(service)
        {
        }
    }
}