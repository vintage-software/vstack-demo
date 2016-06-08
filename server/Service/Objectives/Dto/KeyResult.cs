using Service.General.Dto;
using System.ComponentModel.DataAnnotations;

namespace Service.Objectives.Dto
{
    public class KeyResult : BaseDto, IDepartmentDto
    {
        public int Id { get; set; }

        public int CompanyId { get; set; }

        public int? DepartmentId { get; set; }

        public int? CompanyObjectiveId { get; set; }

        public int? DepartmentObjectiveId { get; set; }

        [MaxLength(100)]
        public string Title { get; set; }

        int IDepartmentDto.DepartmentId
        {
            get
            {
                return this.DepartmentId ?? 0;
            }
            set
            {
                this.DepartmentId = value;
            }
        }

        public CompanyObjective CompanyObjective { get; set; }

        public DepartmentObjective DepartmentObjective { get; set; }
    }
}