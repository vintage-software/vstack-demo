using Service.General.Dto;

namespace Service.Objectives.Dto
{
    public class ObjectiveAssociation : BaseDto, IDepartmentDto
    {
        public int Id { get; set; }

        public int CompanyId { get; set; }

        public int DepartmentId { get; set; }

        public int CompanyObjectiveId { get; set; }

        public int DepartmentObjectiveId { get; set; }

        public CompanyObjective CompanyObjective { get; set; }

        public DepartmentObjective DepartmentObjective { get; set; }
    }
}