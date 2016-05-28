using Domain.General;
using System.ComponentModel.DataAnnotations;

namespace Domain.Objectives
{
    public class KeyResult : BaseDomain, IDepartmentDomain
    {
        private KeyResult()
        {
        }

        private KeyResult(int companyId, string title)
            : this()
        {
            this.CompanyId = companyId;
            this.Title = title;
        }

        public static KeyResult FromCompanyObjective(int companyId, int companyObjectiveId, string title)
        {
            return new KeyResult(companyId, title)
            {
                CompanyObjectiveId = companyObjectiveId
            };
        }

        public static KeyResult FromDepartmentObjective(int companyId, int departmentId, int departmentObjectiveId, string title)
        {
            return new KeyResult(companyId, title)
            {
                DepartmentId = departmentId,
                DepartmentObjectiveId = departmentObjectiveId
            };
        }

        public int CompanyId { get; private set; }

        public int? DepartmentId { get; private set; }

        public int? CompanyObjectiveId { get; private set; }

        public int? DepartmentObjectiveId { get; private set; }

        [MaxLength(100)]
        public string Title { get; set; }

        int IDepartmentDomain.DepartmentId
        {
            get
            {
                return this.DepartmentId ?? 0;
            }
        }

        public CompanyObjective CompanyObjective { get; private set; }

        public DepartmentObjective DepartmentObjective { get; private set; }
    }
}