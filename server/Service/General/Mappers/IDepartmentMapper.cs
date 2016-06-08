using Domain.General;
using System.Collections.Generic;
using System.Linq;
using Vstack.Services.Mapper.General;
using Vstack.Services.Service.General;

namespace Service.General.Mappers
{
    public interface IDepartmentMapper<TDmn> : IMapper<TDmn>
        where TDmn : class, IDepartmentDomain
    {
        IQueryable<TDmn> GetByIdsIfInDepartment(int companyId, int departmentId, IEnumerable<int> ids, DeletedState deletedState);

        IQueryable<TDmn> GetByDepartment(int companyId, int departmentId, DeletedState deletedState);
    }
}