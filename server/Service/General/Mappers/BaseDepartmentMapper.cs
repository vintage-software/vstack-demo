using Domain.General;
using System.Collections.Generic;
using System.Linq;
using Vstack.Services.Mapper.General;
using Vstack.Services.Service.General;

namespace Service.General.Mappers
{
    public abstract class BaseDepartmentMapper<TDmn>
        : BaseMapper<TDmn>, IDoubleChildMapper<TDmn>
        where TDmn : class, IDepartmentDomain
    {
        public BaseDepartmentMapper(string connectionString)
            : base(connectionString)
        { }

        public IQueryable<TDmn> GetByIdsIfInParent(int grandParentId, int parentId, IEnumerable<int> ids, DeletedState deletedState)
        {
            return this.GetByParent(grandParentId, parentId, deletedState).Where(i => ids.Contains(i.Id));
        }

        public IQueryable<TDmn> GetByParent(int grandParentId, int parentId, DeletedState deletedState)
        {
            this.SetDeletedState(deletedState);
            return this.DbSet.Where(i => i.CompanyId == grandParentId && i.DepartmentId == parentId);
        }
    }
}