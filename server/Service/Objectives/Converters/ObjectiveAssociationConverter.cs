using Service.General;
using Service.Objectives.Dto;
using Vstack.Services.Service.Converters;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Converters
{
    public class ObjectiveAssociationConverter
        : BaseConverter<Dto.ObjectiveAssociation, Dmn.ObjectiveAssociation, Permissions>
    {
        protected override Dto.ObjectiveAssociation Convert()
        {
            return new Dto.ObjectiveAssociation()
            {
                Id = this.Domain.Id,
                CompanyId = this.Domain.CompanyId,
                DepartmentId = this.Domain.DepartmentId,
                CompanyObjectiveId = this.Domain.CompanyObjectiveId,
                DepartmentObjectiveId = this.Domain.DepartmentObjectiveId,
                CompanyObjective = this.GetCompanyObjective(),
                DepartmentObjective = this.GetDepartmentObjective()
            };
        }

        private CompanyObjective GetCompanyObjective()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.CompanyObjective,
                dto: i => i.CompanyObjective,
                converter: new CompanyObjectiveConverter()
            );
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
    }
}