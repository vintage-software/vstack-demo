using Mapper.Users;
using Service.General;
using Service.Users.Converters;
using Service.Users.Dto;
using System.Collections.Generic;
using Vstack.Services.Service.General;
using Vstack.Services.Service.Services;
using Dmn = Domain.Users;

namespace Service.Users.Services
{
    public class CompanyService
        : BaseService<Dto.Company, Dmn.Company, CompanyMapper, CompanyConverter, Permissions>
    {
        public CompanyService(CompanyMapper mapper, Permissions permissions)
            : base(mapper, permissions)
        {
        }

        protected override ActionResult<Dmn.Company> Construct(Company dto)
        {
            Dmn.Company domain = new Dmn.Company(dto.Name);
            return new ActionResult<Dmn.Company>(domain, RestStatus.Created);
        }

        protected override RestStatus Delete(Dmn.Company domain)
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

        protected override RestStatus Update(Dmn.Company domain, Company dto)
        {
            domain.Name = dto.Name;
            return RestStatus.Updated;
        }
    }
}