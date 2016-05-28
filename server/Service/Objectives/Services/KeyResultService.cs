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
    public class KeyResultService
        : BaseCompanyAndDepartmentService<Dto.KeyResult, Dmn.KeyResult, KeyResultMapper, KeyResultConverter, Permissions>
    {
        public KeyResultService(KeyResultMapper mapper, Permissions permissions)
            : base(mapper, permissions)
        {
        }

        protected override ActionResult<Dmn.KeyResult> Construct(KeyResult dto)
        {
            if (dto.CompanyObjectiveId.HasValue == dto.DepartmentObjectiveId.HasValue)
            {
                return new ActionResult<Domain.Objectives.KeyResult>(null, RestStatus.UnprocessableEntity);
            }

            Dmn.KeyResult domain;
            if (dto.CompanyObjectiveId.HasValue)
            {
                domain = Dmn.KeyResult.FromCompanyObjective(dto.CompanyId, dto.CompanyObjectiveId.Value, dto.Title);
            }
            else if (dto.DepartmentId.HasValue && dto.DepartmentObjectiveId.HasValue)
            {
                domain = Dmn.KeyResult.FromDepartmentObjective(dto.CompanyId, dto.DepartmentId.Value, dto.DepartmentObjectiveId.Value, dto.Title);
            }
            else
            {
                return new ActionResult<Dmn.KeyResult>(null, RestStatus.UnprocessableEntity);
            }

            return new ActionResult<Dmn.KeyResult>(domain, RestStatus.Created);
        }

        protected override RestStatus Delete(Dmn.KeyResult domain)
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

        protected override RestStatus Update(Dmn.KeyResult domain, KeyResult dto)
        {
            domain.Title = dto.Title;
            return RestStatus.Updated;
        }
    }
}