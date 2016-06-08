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
    public class CompanyObjectiveService
        : BaseCompanyService<Dto.CompanyObjective, Dmn.CompanyObjective, CompanyObjectiveMapper, CompanyObjectiveConverter, Permissions>
    {
        public CompanyObjectiveService(CompanyObjectiveMapper mapper, Permissions permissions)
            : base(mapper, permissions)
        {
        }

        protected override ActionResult<Dmn.CompanyObjective> Construct(CompanyObjective dto)
        {
            Dmn.CompanyObjective domain = new Dmn.CompanyObjective(dto.CompanyId, dto.Title, dto.Description);
            return new ActionResult<Dmn.CompanyObjective>(domain, RestStatus.Created);
        }

        protected override RestStatus Delete(Dmn.CompanyObjective domain)
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

        protected override RestStatus ReadByParent(int parentId, DeletedState deletedState)
        {
            return RestStatus.Ok;
        }

        protected override RestStatus Update(Dmn.CompanyObjective domain, CompanyObjective dto)
        {
            domain.Description = dto.Description;
            domain.EstimatedCompletionDate = dto.EstimatedCompletionDate;
            domain.Percentage = dto.Percentage;
            domain.Title = dto.Title;
            return RestStatus.Updated;
        }
    }
}