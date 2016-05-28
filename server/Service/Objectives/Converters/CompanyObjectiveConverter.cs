using Service.General;
using Service.Users.Converters;
using Service.Users.Dto;
using Vstack.Services.Service.Converters;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Converters
{
    public class CompanyObjectiveConverter
        : BaseConverter<Dto.CompanyObjective, Dmn.CompanyObjective, Permissions>
    {
        protected override Dto.CompanyObjective Convert()
        {
            return new Dto.CompanyObjective()
            {
                Id = this.Domain.Id,
                CompanyId = this.Domain.CompanyId,
                Description = this.Domain.Description,
                EstimatedCompletionDate = this.Domain.EstimatedCompletionDate,
                Percentage = this.Domain.Percentage,
                Title = this.Domain.Title,
                KeyResults = this.GetKeyResults(),
                ObjectiveAssociations = this.GetObjectiveAssociations(),
                Company = this.GetCompany()
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

        private Company GetCompany()
        {
            return this.HandlePermissions(
                hasPermissions: true,
                domain: i => i.Company,
                dto: i => i.Company,
                converter: new CompanyConverter()
            );
        }
    }
}