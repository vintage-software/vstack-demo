using Domain.Objectives;
using Domain.Users;
using Service.General.Persistence.Conventions;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Vstack.Services.Data.EntityFramework;
using Vstack.Services.Data.EntityFramework.Conventions;
using Vstack.Services.General;

namespace Service.General.Persistence
{
    public class OkrDbContext : VintageEfDbContext
    {
        public OkrDbContext(string connectionString)
            : base(connectionString)
        {
        }

        public DbSet<Company> Companies { get; set; }

        public DbSet<Department> Departments { get; set; }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<CompanyObjective> CompanyObjectives { get; set; }

        public DbSet<DepartmentObjective> DepartmentObjectives { get; set; }

        public DbSet<ObjectiveAssociation> ObjectiveAssociations { get; set; }

        public DbSet<KeyResult> KeyResults { get; set; }

        public DbSet<Assignment> Assignments { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.ValidateNotNullParameter(nameof(modelBuilder));

            modelBuilder.Configurations.Add(new EmployeeConfiguration());
            modelBuilder.Configurations.Add(new ObjectiveAssociationConfiguration());

            modelBuilder.Conventions.Add(new CompositePrimaryKeyConvention("CompanyId"));
            modelBuilder.Conventions.Add(new CompositeForeignKeyTypeNameConvention("CompanyId"));
            modelBuilder.Conventions.Add(new CompositeForeignKeyPropertyNameConvention("CompanyId"));
            modelBuilder.Conventions.Add(new TimeStampConvention());
            modelBuilder.Conventions.Add(new DateTime2Convention());
            modelBuilder.Conventions.AddBefore<ForeignKeyIndexConvention>(new PartialForeignKeyIndexConvention(new string[] { "DepartmentCompanyObjective" }));
            modelBuilder.Conventions.Remove<ForeignKeyIndexConvention>();
            modelBuilder.Conventions.Remove<PrimaryKeyNameForeignKeyDiscoveryConvention>();
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

            base.OnModelCreating(modelBuilder);
        }
    }
}