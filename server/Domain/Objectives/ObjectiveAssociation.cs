using Domain.General;
using Domain.Users;

namespace Domain.Objectives
{
    public class ObjectiveAssociation : BaseDomain, IDepartmentDomain
    {
        private ObjectiveAssociation()
        {
        }

        public ObjectiveAssociation(int companyId, int departmentId, int companyObjectiveId, int departmentObjectiveId)
            : this()
        {
            this.CompanyId = companyId;
            this.DepartmentId = departmentId;
            this.CompanyObjectiveId = companyObjectiveId;
            this.DepartmentObjectiveId = departmentObjectiveId;
        }

        public int CompanyId { get; private set; }

        public int DepartmentId { get; private set; }

        public int CompanyObjectiveId { get; private set; }

        public int DepartmentObjectiveId { get; private set; }

        public CompanyObjective CompanyObjective { get; private set; }

        public DepartmentObjective DepartmentObjective { get; private set; }
    }
}