using Domain.General;
using System.Collections.Generic;
using System.Linq;
using Vstack.Services.Data.General;
using Vstack.Services.Mapper.General;
using Vstack.Services.Service.General;

namespace Mapper.General.Mappers
{
    public abstract class BaseCompanyMapper<TDmn>
        : BaseMapper<TDmn>, IChildMapper<TDmn>
        where TDmn : class, ICompanyDomain
    {
        public BaseCompanyMapper(string connectionString)
            : base(connectionString)
        { }

        public IQueryable<TDmn> GetByIdsIfInParent(int parentId, IEnumerable<int> ids, DeletedState deletedState)
        {
            return this.GetByParent(parentId, deletedState).Where(i => ids.Contains(i.Id));
        }

        public IQueryable<TDmn> GetByParent(int parentId, DeletedState deletedState)
        {
            this.SetDeletedState(deletedState);
            return this.DbSet.Where(i => i.CompanyId == parentId);
        }
    }
}