using Mapper.Objectives;
using Service.Objectives.Converters;
using Service.Objectives.Services;
using WebApi.General;
using Dmn = Domain.Objectives;
using Dto = Service.Objectives.Dto;

namespace WebApi.Controllers.Objectives
{
    public class AssignmentsController
        : BaseDepartmentController<Dto.Assignment, Dmn.Assignment, AssignmentMapper, AssignmentConverter>
    {
        public AssignmentsController(AssignmentService service)
            : base(service)
        {
        }
    }
}