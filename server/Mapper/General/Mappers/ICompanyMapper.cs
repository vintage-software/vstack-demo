using Domain.General;
using System.Collections.Generic;
using System.Linq;
using Vstack.Services.Mapper.General;
using Vstack.Services.Service.General;

namespace Mapper.General.Mappers
{
    public interface ICompanyMapper<TDmn> : IMapper<TDmn>
        where TDmn : class, ICompanyDomain
    {
        IQueryable<TDmn> GetByIdsIfInCompany(int companyId, IEnumerable<int> ids, DeletedState deletedState);

        IQueryable<TDmn> GetByCompany(int companyId, DeletedState deletedState);
    }
}