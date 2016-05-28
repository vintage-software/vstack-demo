using Service.General.Dto;
using Service.Users.Dto;

namespace Service.Objectives.Dto
{
    public class DepartmentObjective : Objective, IDepartmentDto
    {
        public int CompanyId { get; set; }

        public int DepartmentId { get; set; }

        public Department Department { get; set; }

        public Assignment[] Assignments { get; set; }
    }
}