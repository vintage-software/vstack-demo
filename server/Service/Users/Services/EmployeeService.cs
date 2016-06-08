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
    public class EmployeeService
        : BaseDepartmentService<Dto.Employee, Dmn.Employee, EmployeeMapper, EmployeeConverter, Permissions>
    {
        public EmployeeService(EmployeeMapper mapper, Permissions permissions)
            : base(mapper, permissions)
        {
        }

        protected override ActionResult<Dmn.Employee> Construct(Employee dto)
        {
            Dmn.Employee domain = new Dmn.Employee(dto.CompanyId, dto.DepartmentId, dto.FirstName, dto.LastName, dto.EmailAddress);
            return new ActionResult<Dmn.Employee>(domain, RestStatus.Created);
        }

        protected override RestStatus Delete(Dmn.Employee domain)
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

        protected override RestStatus Update(Dmn.Employee domain, Employee dto)
        {
            domain.EmailAddress = dto.EmailAddress;
            domain.FirstName = dto.FirstName;
            domain.LastName = dto.LastName;
            return RestStatus.Updated;
        }
    }
}