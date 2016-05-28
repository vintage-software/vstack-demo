using Service.General.Dto;
using Service.Users.Dto;

namespace Service.Objectives.Dto
{
    public class CompanyObjective : Objective, ICompanyDto
    {
        public int CompanyId { get; set; }

        public Company Company { get; set; }
    }
}