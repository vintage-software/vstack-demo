using Domain.Users;
using System.Data.Entity.ModelConfiguration;

using Vstack.Services.Data.EntityFramework;

namespace Service.General.Persistence.Conventions
{
    public class EmployeeConfiguration
        : EntityTypeConfiguration<Employee>
    {
        public EmployeeConfiguration()
        {
            this
                .HasUniqueIndexWithDateDeleted("IX_Email", i => i.EmailAddress);
        }
    }
}