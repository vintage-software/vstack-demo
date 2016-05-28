using Domain.General;
using Domain.Objectives;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Users
{
    public class Employee : BaseDomain, IDepartmentDomain
    {
        private Employee()
        {
            this.Assignments = new List<Assignment>();
        }

        public Employee(int companyId, int departmentId, string firstName, string lastName, string emailAddress)
            : this()
        {
            this.CompanyId = companyId;
            this.DepartmentId = departmentId;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailAddress = emailAddress;
        }

        public int CompanyId { get; private set; }

        public int DepartmentId { get; private set; }

        [MaxLength(100)]
        public string FirstName { get; set; }

        [MaxLength(100)]
        public string LastName { get; set; }

        [MaxLength(100)]
        public string EmailAddress { get; set; }

        public Department Department { get; private set; }

        public ICollection<Assignment> Assignments { get; private set; }
    }
}