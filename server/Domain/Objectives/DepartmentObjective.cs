using Domain.General;
using Domain.Users;
using System.Collections.Generic;

namespace Domain.Objectives
{
    public class DepartmentObjective : Objective, IDepartmentDomain
    {
        private DepartmentObjective()
        {
            this.Assignments = new List<Assignment>();
        }

        public DepartmentObjective(int companyId, int departmentId, string title, string description)
            : this()
        {
            this.CompanyId = companyId;
            this.DepartmentId = departmentId;
            this.Title = title;
            this.Description = description;
        }

        public int CompanyId { get; private set; }

        public int DepartmentId { get; private set; }

        public Department Department { get; private set; }

        public ICollection<Assignment> Assignments { get; private set; }
    }
}