using Service.General.Dto;
using System;
using System.ComponentModel.DataAnnotations;
using Vstack.Services.Service.Dto;

namespace Service.Objectives.Dto
{
    public abstract class Objective : SecureDto, IDto
    {
        public int Id { get; set; }

        [MaxLength(100)]
        public string Title { get; set; }

        public string Description { get; set; }

        public decimal Percentage { get; set; }

        public DateTime EstimatedCompletionDate { get; set; }

        public KeyResult[] KeyResults { get; set; }

        public ObjectiveAssociation[] ObjectiveAssociations { get; set; }
    }
}