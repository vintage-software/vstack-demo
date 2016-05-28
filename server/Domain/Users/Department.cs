using Domain.General;
using Domain.Objectives;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Users
{
    public class Department : BaseDomain, ICompanyDomain
    {
        private Department()
        {
            this.Employees = new List<Employee>();
            this.DepartmentObjectives = new List<DepartmentObjective>();
        }

        public Department(int companyId, string name)
            : this()
        {
            this.CompanyId = companyId;
            this.Name = name;
        }

        public int CompanyId { get; private set; }

        [MaxLength(100)]
        public string Name { get; set; }

        public Company Company { get; private set; }

        public ICollection<Employee> Employees { get; private set; }

        public ICollection<DepartmentObjective> DepartmentObjectives { get; private set; }
    }
}