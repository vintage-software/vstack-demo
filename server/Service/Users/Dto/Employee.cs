using Service.General.Dto;
using Service.Objectives.Dto;
using System.ComponentModel.DataAnnotations;

namespace Service.Users.Dto
{
    public class Employee : BaseDto, IDepartmentDto
    {
        public int Id { get; set; }

        public int CompanyId { get; set; }

        public int DepartmentId { get; set; }

        [MaxLength(100)]
        public string FirstName { get; set; }

        [MaxLength(100)]
        public string LastName { get; set; }

        [MaxLength(100)]
        public string EmailAddress { get; set; }

        public Department Department { get; set; }

        public Assignment[] Assignments { get; set; }
    }
}