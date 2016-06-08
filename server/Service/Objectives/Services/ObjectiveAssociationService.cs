using Service.General;
using Service.General.Services;
using Service.Objectives.Converters;
using Service.Objectives.Dto;
using Service.Objectives.Mappers;
using System.Collections.Generic;
using Vstack.Services.Service.General;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Services
{
    public class ObjectiveAssociationService
        : BaseCompanyAndDepartmentService<Dto.ObjectiveAssociation, Dmn.ObjectiveAssociation, ObjectiveAssociationMapper, ObjectiveAssociationConverter, Permissions>
    {
        public ObjectiveAssociationService(ObjectiveAssociationMapper mapper, Permissions permissions)
            : base(mapper, permissions)
        {
        }

        protected override ActionResult<Dmn.ObjectiveAssociation> Construct(ObjectiveAssociation dto)
        {
            Dmn.ObjectiveAssociation domain = new Dmn.ObjectiveAssociation(dto.CompanyId, dto.DepartmentId, dto.CompanyObjectiveId, dto.DepartmentObjectiveId);

            return new ActionResult<Dmn.ObjectiveAssociation>(domain, RestStatus.Created);
        }

        protected override RestStatus Delete(Dmn.ObjectiveAssociation domain)
        {
            return RestStatus.Deleted;
        }

        protected override RestStatus Read(IEnumerable<int> ids, DeletedState deletedState)
        {
            return RestStatus.Ok;
        }

        protected override RestStatus ReadAll(DeletedState deletedState)
        {
            return RestStatus.Ok;
        }

        protected override RestStatus ReadByCompany(int companyId, DeletedState deletedState)
        {
            return RestStatus.Ok;
        }

        protected override RestStatus ReadByDepartment(int companyId, int departmentId, DeletedState deletedState)
        {
            return RestStatus.Ok;
        }

        protected override RestStatus Update(Dmn.ObjectiveAssociation domain, ObjectiveAssociation dto)
        {
            return RestStatus.BadRequest;
        }
    }
}