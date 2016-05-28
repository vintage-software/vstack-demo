using Service.General;
using Service.Objectives.Dto;
using Service.Users.Converters;
using Service.Users.Dto;
using Vstack.Services.Service.Converters;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Converters
{
    public class AssignmentConverter
        : BaseConverter<Dto.Assignment, Dmn.Assignment, Permissions>
    {
        protected override Dto.Assignment Convert()
        {
            return new Dto.Assignment()
            {
                Id = this.Domain.Id,
                CompanyId = this.Domain.CompanyId,
                DepartmentId = this.Domain.DepartmentId,
                DepartmentObjectiveId = this.Domain.DepartmentObjectiveId,
                EmployeeId = this.Domain.EmployeeId,
                Month = this.Domain.Month,
                DepartmentObjective = this.GetDepartmentObjective(),
                Employee = this.GetEmployee()
            };
        }

        private DepartmentObjective GetDepartmentObjective()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.DepartmentObjective,
                dto: i => i.DepartmentObjective,
                converter: new DepartmentObjectiveConverter()
            );
        }

        private Employee GetEmployee()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.Employee,
                dto: i => i.Employee,
                converter: new EmployeeConverter()
            );
        }
    }
}