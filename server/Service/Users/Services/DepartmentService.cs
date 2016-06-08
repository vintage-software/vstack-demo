using Service.General;
using Service.General.Services;
using Service.Users.Converters;
using Service.Users.Dto;
using Service.Users.Mappers;
using System.Collections.Generic;
using Vstack.Services.Service.General;
using Dmn = Domain.Users;

namespace Service.Users.Services
{
    public class DepartmentService
        : BaseCompanyService<Dto.Department, Dmn.Department, DepartmentMapper, DepartmentConverter, Permissions>
    {
        public DepartmentService(DepartmentMapper mapper, Permissions permissions)
            : base(mapper, permissions)
        {
        }

        protected override ActionResult<Dmn.Department> Construct(Department dto)
        {
            Dmn.Department domain = new Dmn.Department(dto.CompanyId, dto.Name);
            return new ActionResult<Dmn.Department>(domain, RestStatus.Created);
        }

        protected override RestStatus Delete(Dmn.Department domain)
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

        protected override RestStatus Update(Dmn.Department domain, Department dto)
        {
            domain.Name = dto.Name;
            return RestStatus.Updated;
        }
    }
}