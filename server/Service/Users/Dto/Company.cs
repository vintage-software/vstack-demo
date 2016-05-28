using Service.General.Dto;
using Service.Objectives.Dto;
using System.ComponentModel.DataAnnotations;
using Vstack.Services.Service.Dto;

namespace Service.Users.Dto
{
    public class Company : SecureDto, IDto
    {
        public int Id { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }

        public Department[] Departments { get; set; }

        public CompanyObjective[] CompanyObjectives { get; set; }
    }
}