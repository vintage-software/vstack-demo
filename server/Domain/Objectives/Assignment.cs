using Domain.General;
using Domain.Users;

namespace Domain.Objectives
{
    public class Assignment : BaseDomain, IDepartmentDomain, IEmployeeDomain
    {
        private Assignment()
        {
        }

        public Assignment(int companyId, int departmentId, int departmentObjectiveId, int employeeId, int month)
            : this()
        {
            this.CompanyId = companyId;
            this.DepartmentId = departmentId;
            this.DepartmentObjectiveId = departmentObjectiveId;
            this.EmployeeId = employeeId;
            this.Month = month;
        }

        public int CompanyId { get; private set; }

        public int DepartmentId { get; private set; }

        public int DepartmentObjectiveId { get; private set; }

        public int EmployeeId { get; private set; }

        public int Month { get; private set; }

        public Employee Employee { get; private set; }

        public DepartmentObjective DepartmentObjective { get; private set; }
    }
}