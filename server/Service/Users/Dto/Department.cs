using Service.General.Dto;
using Service.Objectives.Dto;
using System.ComponentModel.DataAnnotations;

namespace Service.Users.Dto
{
    public class Department : BaseDto, ICompanyDto
    {
        public int Id { get; set; }

        public int CompanyId { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }

        public Company Company { get; set; }

        public Employee[] Employees { get; set; }

        public DepartmentObjective[] DepartmentObjectives { get; set; }
    }
}