using Service.General;
using Service.Objectives.Converters;
using Service.Objectives.Dto;
using Service.Users.Dto;
using Vstack.Services.Service.Converters;
using Dmn = Domain.Users;

namespace Service.Users.Converters
{
    public class EmployeeConverter
        : BaseConverter<Dto.Employee, Dmn.Employee, Permissions>
    {
        protected override Dto.Employee Convert()
        {
            return new Dto.Employee()
            {
                Id = this.Domain.Id,
                CompanyId = this.Domain.CompanyId,
                DepartmentId = this.Domain.DepartmentId,
                FirstName = this.Domain.FirstName,
                LastName = this.Domain.LastName,
                EmailAddress = this.Domain.EmailAddress,
                Assignments = this.GetAssignments(),
                Department = this.GetDepartment()
            };
        }

        private Assignment[] GetAssignments()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.Assignments,
                dto: i => i.Assignments,
                converter: new AssignmentConverter()
            );
        }

        private Department GetDepartment()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.Department,
                dto: i => i.Department,
                converter: new DepartmentConverter()
            );
        }
    }
}