using Service.General.Dto;
using Service.Users.Dto;

namespace Service.Objectives.Dto
{
    public class Assignment : BaseDto, IDepartmentDto, IEmployeeDto
    {
        public int Id { get; set; }

        public int DepartmentId { get; set; }

        public int CompanyId { get; set; }

        public int DepartmentObjectiveId { get; set; }

        public int EmployeeId { get; set; }

        public int Month { get; set; }

        public Employee Employee { get; set; }

        public DepartmentObjective DepartmentObjective { get; set; }
    }
}