using Mapper.Users;
using Service.Users.Converters;
using Service.Users.Services;
using WebApi.General;
using Dmn = Domain.Users;
using Dto = Service.Users.Dto;

namespace WebApi.Controllers.Users
{
    public class CompaniesController
        : BaseController<Dto.Company, Dmn.Company, CompanyMapper, CompanyConverter>
    {
        public CompaniesController(CompanyService service)
            : base(service)
        {
        }
    }
}