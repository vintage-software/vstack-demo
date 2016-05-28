using Service.General;
using Service.Objectives.Converters;
using Service.Objectives.Dto;
using Vstack.Services.Service.Converters;
using Dmn = Domain.Users;

namespace Service.Users.Converters
{
    public class CompanyConverter
        : BaseConverter<Dto.Company, Dmn.Company, Permissions>
    {
        protected override Dto.Company Convert()
        {
            return new Dto.Company()
            {
                Id = this.Domain.Id,
                Name = this.Domain.Name,
                Departments = this.GetDepartments(),
                CompanyObjectives = this.GetCompanyObjectives()
            };
        }

        private Dto.Department[] GetDepartments()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.Departments,
                dto: i => i.Departments,
                converter: new DepartmentConverter()
            );
        }

        private CompanyObjective[] GetCompanyObjectives()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.CompanyObjectives,
                dto: i => i.CompanyObjectives,
                converter: new CompanyObjectiveConverter()
            );
        }
    }
}