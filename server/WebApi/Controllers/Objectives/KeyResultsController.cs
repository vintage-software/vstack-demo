using Service.Objectives.Converters;
using Service.Objectives.Mappers;
using Service.Objectives.Services;
using WebApi.General;
using Dmn = Domain.Objectives;
using Dto = Service.Objectives.Dto;

namespace WebApi.Controllers.Objectives
{
    public class KeyResultsController
        : BaseCompanyAndDepartmentController<Dto.KeyResult, Dmn.KeyResult, KeyResultMapper, KeyResultConverter>
    {
        public KeyResultsController(KeyResultService service)
            : base(service)
        {
        }
    }
}