using Mapper.Objectives;
using Service.General;
using Service.General.Services;
using Service.Objectives.Converters;
using Service.Objectives.Dto;
using System.Collections.Generic;
using Vstack.Services.Service.General;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Services
{
    public class DepartmentObjectiveService
        : BaseDepartmentService<Dto.DepartmentObjective, Dmn.DepartmentObjective, DepartmentObjectiveMapper, DepartmentObjectiveConverter, Permissions>
    {
        public DepartmentObjectiveService(DepartmentObjectiveMapper mapper, Permissions permissions)
            : base(mapper, permissions)
        {
        }

        protected override ActionResult<Dmn.DepartmentObjective> Construct(DepartmentObjective dto)
        {
            Dmn.DepartmentObjective domain = new Dmn.DepartmentObjective(dto.CompanyId, dto.DepartmentId, dto.Title, dto.Description);
            return new ActionResult<Dmn.DepartmentObjective>(domain, RestStatus.Created);
        }

        protected override RestStatus Delete(Dmn.DepartmentObjective domain)
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

        protected override RestStatus Update(Dmn.DepartmentObjective domain, DepartmentObjective dto)
        {
            domain.Description = dto.Description;
            domain.EstimatedCompletionDate = dto.EstimatedCompletionDate;
            domain.Percentage = dto.Percentage;
            domain.Title = dto.Title;
            return RestStatus.Updated;
        }
    }
}