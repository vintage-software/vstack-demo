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
    public class AssignmentService
        : BaseDepartmentService<Dto.Assignment, Dmn.Assignment, AssignmentMapper, AssignmentConverter, Permissions>
    {
        public AssignmentService(AssignmentMapper mapper, Permissions permissions)
            : base(mapper, permissions)
        {
        }

        protected override ActionResult<Dmn.Assignment> Construct(Assignment dto)
        {
            Dmn.Assignment domain = new Dmn.Assignment(dto.CompanyId, dto.DepartmentId, dto.DepartmentObjectiveId, dto.EmployeeId, dto.Month);
            return new ActionResult<Dmn.Assignment>(domain, RestStatus.Created);
        }

        protected override RestStatus Delete(Dmn.Assignment domain)
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

        protected override RestStatus ReadByParent(int grandParentId, int parentId, DeletedState deletedState)
        {
            return RestStatus.Ok;
        }

        protected override RestStatus Update(Dmn.Assignment domain, Assignment dto)
        {
            return RestStatus.BadRequest;
        }
    }
}