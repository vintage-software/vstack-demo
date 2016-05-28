using Mapper.Objectives;
using Service.Objectives.Converters;
using Service.Objectives.Services;
using WebApi.General;
using Dmn = Domain.Objectives;
using Dto = Service.Objectives.Dto;

namespace WebApi.Controllers.Objectives
{
    public class ObjectiveAssociationsController
        : BaseCompanyAndDepartmentController<Dto.ObjectiveAssociation, Dmn.ObjectiveAssociation, ObjectiveAssociationMapper, ObjectiveAssociationConverter>
    {
        public ObjectiveAssociationsController(ObjectiveAssociationService service)
            : base(service)
        {
        }
    }
}