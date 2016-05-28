using Domain.General;
using Domain.Objectives;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Users
{
    public class Company : BaseDomain
    {
        private Company()
        {
            this.Departments = new List<Department>();
            this.CompanyObjectives = new List<CompanyObjective>();
        }

        public Company(string name)
            : this()
        {
            this.Name = name;
        }

        [MaxLength(100)]
        public string Name { get; set; }

        public ICollection<Department> Departments { get; private set; }

        public ICollection<CompanyObjective> CompanyObjectives { get; private set; }
    }
}