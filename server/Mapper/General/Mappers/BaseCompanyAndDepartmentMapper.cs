using Domain.General;
using System.Collections.Generic;
using System.Linq;
using Vstack.Services.Service.General;

namespace Mapper.General.Mappers
{
    public abstract class BaseCompanyAndDepartmentMapper<TDmn>
        : BaseMapper<TDmn>, ICompanyMapper<TDmn>, IDepartmentMapper<TDmn>
        where TDmn : class, IDepartmentDomain
    {
        public BaseCompanyAndDepartmentMapper(string connectionString)
            : base(connectionString)
        { }

        public IQueryable<TDmn> GetByCompany(int companyId, DeletedState deletedState)
        {
            this.SetDeletedState(deletedState);
            return this.DbSet.Where(i => i.CompanyId == companyId);
        }

        public IQueryable<TDmn> GetByDepartment(int companyId, int departmentId, DeletedState deletedState)
        {
            this.SetDeletedState(deletedState);
            return this.DbSet.Where(i => i.CompanyId == companyId && i.DepartmentId == departmentId);
        }

        public IQueryable<TDmn> GetByIdsIfInCompany(int companyId, IEnumerable<int> ids, DeletedState deletedState)
        {
            return this.GetByCompany(companyId, deletedState).Where(i => ids.Contains(i.Id));
        }

        public IQueryable<TDmn> GetByIdsIfInDepartment(int companyId, int departmentId, IEnumerable<int> ids, DeletedState deletedState)
        {
            return this.GetByDepartment(companyId, departmentId, deletedState).Where(i => ids.Contains(i.Id));
        }
    }
}