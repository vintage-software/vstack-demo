using Domain.General;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Objectives
{
    public abstract class Objective : BaseDomain
    {
        private decimal percentage;

        public Objective()
        {
            this.KeyResults = new List<KeyResult>();
            this.ObjectiveAssociations = new List<ObjectiveAssociation>();
        }

        [MaxLength(100)]
        public string Title { get; set; }

        public string Description { get; set; }

        public decimal Percentage
        {
            get
            {
                return this.percentage;
            }
            set
            {
                if (value < 0 || value > 1)
                {
                    throw new Exception();
                }
                this.percentage = value;
            }
        }

        public DateTime EstimatedCompletionDate { get; set; }

        public ICollection<KeyResult> KeyResults { get; private set; }

        public ICollection<ObjectiveAssociation> ObjectiveAssociations { get; private set; }
    }
}