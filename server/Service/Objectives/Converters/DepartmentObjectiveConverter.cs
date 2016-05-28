using Service.General;
using Service.Users.Converters;
using Service.Users.Dto;
using Vstack.Services.Service.Converters;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Converters
{
    public class DepartmentObjectiveConverter
        : BaseConverter<Dto.DepartmentObjective, Dmn.DepartmentObjective, Permissions>
    {
        protected override Dto.DepartmentObjective Convert()
        {
            return new Dto.DepartmentObjective()
            {
                Id = this.Domain.Id,
                CompanyId = this.Domain.CompanyId,
                DepartmentId = this.Domain.DepartmentId,
                Description = this.Domain.Description,
                EstimatedCompletionDate = this.Domain.EstimatedCompletionDate,
                Percentage = this.Domain.Percentage,
                Title = this.Domain.Title,
                KeyResults = this.GetKeyResults(),
                ObjectiveAssociations = this.GetObjectiveAssociations(),
                Assignments = this.GetAssigments(),
                Department = this.GetDepartment()
            };
        }

        private Dto.KeyResult[] GetKeyResults()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.KeyResults,
                dto: i => i.KeyResults,
                converter: new KeyResultConverter()
            );
        }

        private Dto.ObjectiveAssociation[] GetObjectiveAssociations()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.ObjectiveAssociations,
                dto: i => i.ObjectiveAssociations,
                converter: new ObjectiveAssociationConverter()
            );
        }

        private Dto.Assignment[] GetAssigments()
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