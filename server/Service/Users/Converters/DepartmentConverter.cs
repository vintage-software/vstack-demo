using Service.General;
using Service.Objectives.Converters;
using Service.Objectives.Dto;
using Service.Users.Dto;
using Vstack.Services.Service.Converters;
using Dmn = Domain.Users;

namespace Service.Users.Converters
{
    public class DepartmentConverter
        : BaseConverter<Dto.Department, Dmn.Department, Permissions>
    {
        protected override Dto.Department Convert()
        {
            return new Dto.Department()
            {
                Id = this.Domain.Id,
                CompanyId = this.Domain.CompanyId,
                Name = this.Domain.Name,
                Company = this.GetCompany(),
                Employees = this.GetEmployees(),
                DepartmentObjectives = this.GetObjectives()
            };
        }

        private Company GetCompany()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.Company,
                dto: i => i.Company,
                converter: new CompanyConverter()
            );
        }

        private Dto.Employee[] GetEmployees()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.Employees,
                dto: i => i.Employees,
                converter: new EmployeeConverter()
            );
        }

        private DepartmentObjective[] GetObjectives()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.DepartmentObjectives,
                dto: i => i.DepartmentObjectives,
                converter: new DepartmentObjectiveConverter()
            );
        }
    }
}