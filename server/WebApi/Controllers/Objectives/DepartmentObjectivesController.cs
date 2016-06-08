using Service.Objectives.Converters;
using Service.Objectives.Mappers;
using Service.Objectives.Services;
using WebApi.General;
using Dmn = Domain.Objectives;
using Dto = Service.Objectives.Dto;

namespace WebApi.Controllers.Objectives
{
    public class DepartmentObjectivesController
        : BaseDepartmentController<Dto.DepartmentObjective, Dmn.DepartmentObjective, DepartmentObjectiveMapper, DepartmentObjectiveConverter>
    {
        public DepartmentObjectivesController(DepartmentObjectiveService service)
            : base(service)
        {
        }
    }
}