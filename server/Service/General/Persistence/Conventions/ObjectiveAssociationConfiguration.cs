using Domain.Objectives;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

using Vstack.Services.Data.EntityFramework;

namespace Service.General.Persistence.Conventions
{
    public class ObjectiveAssociationConfiguration
        : EntityTypeConfiguration<ObjectiveAssociation>
    {
        public ObjectiveAssociationConfiguration()
        {
            this
               .HasKey(i => i.Id)
               .Property(i => i.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            this
               .HasRequired(i => i.CompanyObjective)
               .WithMany()
               .HasForeignKey(i => new { i.CompanyObjectiveId, i.CompanyId });

            this
               .HasRequired(i => i.DepartmentObjective)
               .WithMany()
               .HasForeignKey(i => new { i.DepartmentObjectiveId, i.CompanyId });

            this
                .HasUniqueIndexWithDateDeleted("IX_CompanyObjectiveId_DepartmentObjectiveId", i => i.CompanyObjectiveId, i => i.DepartmentObjectiveId);
        }
    }
}