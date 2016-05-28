using Domain.General;
using Domain.Users;

namespace Domain.Objectives
{
    public class CompanyObjective : Objective, ICompanyDomain
    {
        private CompanyObjective()
        {
        }

        public CompanyObjective(int companyId, string title, string description)
            : this()
        {
            this.CompanyId = companyId;
            this.Title = title;
            this.Description = description;
        }

        public int CompanyId { get; private set; }

        public Company Company { get; private set; }
    }
}