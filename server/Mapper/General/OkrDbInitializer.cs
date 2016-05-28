using Domain.Objectives;
using Domain.Users;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Vstack.Services.General;

namespace Mapper.General
{
    public class OkrDbInitializer : DropCreateDatabaseIfModelChanges<OkrDbContext>
    {
        private const int RebelAllianceId = 1;

        private const int GalacticEmpireId = 2;

        protected override void Seed(OkrDbContext context)
        {
            context.ValidateNotNullParameter(nameof(context));

            SeedCompanies(context);
            SeedDepartments(context);
            SeedEmployees(context);
            SeedCompanyObjectives(context);
            SeedDepartmentObjectives(context);
            SeedKeyResults(context);
            SeedObjectiveAssociations(context);
            SeedAssignments(context);

            base.Seed(context);
        }

        #region Users
        private static void SeedCompanies(OkrDbContext context)
        {
            List<Company> domains = new List<Company>()
             {
                 new Company(name: "Rebel Alliance"),
                 new Company(name: "Galactic Empire")
             };

            context.Companies.AddRange(domains);
            context.SaveChanges();
        }

        private static void SeedDepartments(OkrDbContext context)
        {
            IEnumerable<Department> domains = Enum.GetValues(typeof(Departments)).Cast<Departments>().OrderBy(i => (int)i).Select(i =>
                new Department(companyId: i.ToString().StartsWith("R") ? RebelAllianceId : GalacticEmpireId, name: i.ToString().Substring(2))
            );

            context.Departments.AddRange(domains);
            context.SaveChanges();
        }

        private static void SeedEmployees(OkrDbContext context)
        {
            List<Employee> domains = new List<Employee>()
             {
                new Employee(
                    companyId: RebelAllianceId,
                    departmentId: (int)Departments.R_Jedi,
                    firstName: "Luke",
                    lastName: "Skywalker",
                    emailAddress: "lskywalker@rebelalliance.com"),

                 new Employee(
                    companyId: RebelAllianceId,
                    departmentId: (int)Departments.R_Jedi,
                    firstName: "Obi-Wan",
                    lastName: "Kenobi",
                    emailAddress: "okenobi@rebelalliance.com"),

                 new Employee(
                    companyId: RebelAllianceId,
                    departmentId: (int)Departments.R_Jedi,
                    firstName: "Minch",
                    lastName: "Yoda",
                    emailAddress: "myoda@rebelalliance.com"),

                 new Employee(
                    companyId: RebelAllianceId,
                    departmentId: (int)Departments.R_Political,
                    firstName: "R2",
                    lastName: "D2",
                    emailAddress: "r2d2@rebelalliance.com"),

                 new Employee(
                    companyId: RebelAllianceId,
                    departmentId: (int)Departments.R_Political,
                    firstName: "C",
                    lastName: "3PO",
                    emailAddress: "c3po@rebelalliance.com"),

                 new Employee(
                    companyId: RebelAllianceId,
                    departmentId: (int)Departments.R_War,
                    firstName: "Han",
                    lastName: "Solo",
                    emailAddress: "hsolo@rebelalliance.com"),

                 new Employee(
                    companyId: RebelAllianceId,
                    departmentId: (int)Departments.R_Political,
                    firstName: "Leia",
                    lastName: "Organa",
                    emailAddress: "lorgana@rebelalliance.com"),

                 new Employee(
                     companyId: RebelAllianceId,
                     departmentId: (int)Departments.R_War,
                     firstName: "Chewbacca",
                     lastName: "Chewbacca",
                     emailAddress: "chewbacca@rebelalliance.com"),

                 new Employee(
                    companyId: GalacticEmpireId,
                    departmentId: (int)Departments.G_Defense,
                    firstName: "Darth",
                    lastName: "Vader",
                    emailAddress: "dvader@galacticempire.com"),

                 new Employee(
                    companyId: GalacticEmpireId,
                    departmentId: (int)Departments.G_Defense,
                    firstName: "Sheev",
                    lastName: "Palpatine",
                    emailAddress: "spalpatine@galacticempire.com"),

                 new Employee(
                    companyId: GalacticEmpireId,
                    departmentId: (int)Departments.G_DeathStar,
                    firstName: "Wilfuff",
                    lastName: "Tarkin",
                    emailAddress: "wtarkin@galacticempire.com"),

                 new Employee(
                    companyId: GalacticEmpireId,
                    departmentId: (int)Departments.G_Economy,
                    firstName: "Jabba",
                    lastName: "The Hutt",
                    emailAddress: "jhutt@galacticempire.com"),

                 new Employee(
                    companyId: GalacticEmpireId,
                    departmentId: (int)Departments.G_Defense,
                    firstName: "Boba",
                    lastName: "Fett",
                    emailAddress: "bfett@galacticempire.com")
             };

            context.Employees.AddRange(domains);
            context.SaveChanges();
        }
        #endregion

        #region Objectives
        public static void SeedCompanyObjectives(OkrDbContext context)
        {
            List<CompanyObjective> domains = new List<CompanyObjective>()
            {
                new CompanyObjective(RebelAllianceId, "Restore the Galactic Republic", ""),
                new CompanyObjective(RebelAllianceId, "Restore the Jedi Order", ""),

                new CompanyObjective(GalacticEmpireId, "Crush the rebellion", ""),
                new CompanyObjective(GalacticEmpireId, "Expand the Gallactic Empire", "")
            };

            context.CompanyObjectives.AddRange(domains);
            context.SaveChanges();
        }

        public static void SeedDepartmentObjectives(OkrDbContext context)
        {
            List<DepartmentObjective> domains = new List<DepartmentObjective>()
            {
                new DepartmentObjective(companyId: RebelAllianceId, departmentId: (int)Departments.R_War, title: "Destroy the Deathstar", description: ""),
                new DepartmentObjective(companyId: RebelAllianceId, departmentId: (int)Departments.R_War, title: "Overthrow the Empreror", description: ""),
                new DepartmentObjective(companyId: RebelAllianceId, departmentId: (int)Departments.R_Political, title: "Restore the Senate of the Republic", description: ""),

                new DepartmentObjective(companyId: RebelAllianceId, departmentId: (int)Departments.R_War, title: "Assemble remaining Jedi", description: ""),
                new DepartmentObjective(companyId: RebelAllianceId, departmentId: (int)Departments.R_Jedi, title: "Kill Darth Sidius", description: ""),
                new DepartmentObjective(companyId: RebelAllianceId, departmentId: (int)Departments.R_Jedi, title: "Kill Darth Vader", description: ""),
                new DepartmentObjective(companyId: RebelAllianceId, departmentId: (int)Departments.R_Jedi, title: "Recruit and Train 100 new Jedi", description: ""),

                new DepartmentObjective(companyId: RebelAllianceId, departmentId: (int)Departments.R_Jedi, title: "Reorganize and clean out Jedi Archives", description: ""),

                new DepartmentObjective(companyId: GalacticEmpireId, departmentId: (int)Departments.G_DeathStar, title: "Destroy planets hosting Rebel strongholds", description: ""),
                new DepartmentObjective(companyId: GalacticEmpireId, departmentId: (int)Departments.G_Sith, title: "Kill remaining Jedi", description: ""),
                new DepartmentObjective(companyId: GalacticEmpireId, departmentId: (int)Departments.G_Defense, title: "Flush out any Republic sympathizers in the Imperial Senate", description: ""),
                new DepartmentObjective(companyId: GalacticEmpireId, departmentId: (int)Departments.G_Sith, title: "Train new Sith Apprentice", description: ""),

                new DepartmentObjective(companyId: GalacticEmpireId, departmentId: (int)Departments.G_Economy, title: "Sieze control of five star systems on the outer rim", description: ""),
                new DepartmentObjective(companyId: GalacticEmpireId, departmentId: (int)Departments.G_Economy, title: "Sieze control of Bespin", description: ""),
                new DepartmentObjective(companyId: GalacticEmpireId, departmentId: (int)Departments.G_Economy, title: "Sieze control of Tatooine", description: ""),

                new DepartmentObjective(companyId: GalacticEmpireId, departmentId: (int)Departments.G_DeathStar, title: "Redesign trash compactors to be blast proof", description: "")
            };

            context.DepartmentObjectives.AddRange(domains);
            context.SaveChanges();
        }

        public static void SeedKeyResults(OkrDbContext context)
        {
            List<KeyResult> domains = new List<KeyResult>()
            {
                KeyResult.FromCompanyObjective(RebelAllianceId, 1, "Destroy the DeathStar"),
                KeyResult.FromCompanyObjective(RebelAllianceId, 1, "Overthrow the Emporer"),
                KeyResult.FromCompanyObjective(RebelAllianceId, 1, "Restore the Senate of the Republic"),

                KeyResult.FromCompanyObjective(RebelAllianceId, 2, "Assemble remaining Jedi"),
                KeyResult.FromCompanyObjective(RebelAllianceId, 2, "Kill Darth Sidius"),
                KeyResult.FromCompanyObjective(RebelAllianceId, 2, "Kill Darth Vader"),

                KeyResult.FromCompanyObjective(GalacticEmpireId, 3, "Destroy planets hosting Rebel strongholds"),
                KeyResult.FromCompanyObjective(GalacticEmpireId, 3, "Kill remaining Jedi"),
                KeyResult.FromCompanyObjective(GalacticEmpireId, 3, "Flush out any Republic sympathizers in the Imperial Senate"),

                KeyResult.FromCompanyObjective(GalacticEmpireId, 4, "Sieze control of five new star systems"),
                KeyResult.FromCompanyObjective(GalacticEmpireId, 4, "Sieze control of Bespin"),
                KeyResult.FromCompanyObjective(GalacticEmpireId, 4, "Sieze control of Tatooine"),

                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_War, 1, "Infiltrate the DeathStar with sympathetic senators"),
                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_War, 1, "Steal DeathStar Blueprints"),
                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_War, 1, "Locate Obiwan Kenobi"),
                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_War, 1, "Successfully incapacitate the DeathStar before its first use"),

                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_War, 2, "Kill Emprorer Palpatine"),

                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_Jedi, 7, "Present 1000 Jedi candidates to the Jedi Council"),
                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_Jedi, 7, "Have the Jedi Council approve 300 Jedi padiwan"),
                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_Jedi, 7, "Have all Jedi padian to construct their own lightsabers"),
                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_Jedi, 7, "Have 100 of the Jedi padiwan complete the Jedi training"),
                KeyResult.FromDepartmentObjective(RebelAllianceId, (int)Departments.R_Jedi, 7, "Have 80% of the passed Jedi padiwan acheive a score of 90 or higher on the lightsaber exam"),


                KeyResult.FromDepartmentObjective(GalacticEmpireId, (int)Departments.G_DeathStar, 9, "Construct the DeathStar"),
                KeyResult.FromDepartmentObjective(GalacticEmpireId, (int)Departments.G_DeathStar, 9, "Locate four rebel strongholds"),
                KeyResult.FromDepartmentObjective(GalacticEmpireId, (int)Departments.G_DeathStar, 9, "Destroy four rebel strongholds"),

                KeyResult.FromDepartmentObjective(GalacticEmpireId, (int)Departments.G_Economy, 15, "Remove the Hutts from power"),
                KeyResult.FromDepartmentObjective(GalacticEmpireId, (int)Departments.G_Economy, 15, "Recruit 5,000 slaves for Imperial Stormtrooper Academy")
            };

            context.KeyResults.AddRange(domains);
            context.SaveChanges();
        }

        public static void SeedObjectiveAssociations(OkrDbContext context)
        {
            List<ObjectiveAssociation> domains = new List<ObjectiveAssociation>()
            {
                new ObjectiveAssociation(RebelAllianceId, (int)Departments.R_War, 1, 1),
                new ObjectiveAssociation(RebelAllianceId, (int)Departments.R_War, 1, 2),
                new ObjectiveAssociation(RebelAllianceId, (int)Departments.R_Political, 1, 3),

                new ObjectiveAssociation(RebelAllianceId, (int)Departments.R_War, 2, 4),
                new ObjectiveAssociation(RebelAllianceId, (int)Departments.R_Jedi, 2, 5),
                new ObjectiveAssociation(RebelAllianceId, (int)Departments.R_Jedi, 2, 6),
                new ObjectiveAssociation(RebelAllianceId, (int)Departments.R_Jedi, 2, 7),

                new ObjectiveAssociation(GalacticEmpireId, (int)Departments.G_DeathStar, 3, 9),
                new ObjectiveAssociation(GalacticEmpireId, (int)Departments.G_Sith, 3, 10),
                new ObjectiveAssociation(GalacticEmpireId, (int)Departments.G_Defense, 3, 11),
                new ObjectiveAssociation(GalacticEmpireId, (int)Departments.G_Sith, 3, 12),

                new ObjectiveAssociation(GalacticEmpireId, (int)Departments.G_Economy, 4, 13),
                new ObjectiveAssociation(GalacticEmpireId, (int)Departments.G_Economy, 3, 14),
                new ObjectiveAssociation(GalacticEmpireId, (int)Departments.G_Economy, 3, 15)
            };

            context.ObjectiveAssociations.AddRange(domains);
            context.SaveChanges();
        }

        public static void SeedAssignments(OkrDbContext context)
        {
            List<Assignment> domains = new List<Assignment>()
            {
                new Assignment(RebelAllianceId, (int)Departments.R_War, 1, 1, 1),
                new Assignment(RebelAllianceId, (int)Departments.R_War, 1, 6, 1),

                new Assignment(RebelAllianceId, (int)Departments.R_War, 2, 1, 1),
                new Assignment(RebelAllianceId, (int)Departments.R_War, 2, 2, 1),
                new Assignment(RebelAllianceId, (int)Departments.R_War, 2, 3, 1),

                new Assignment(RebelAllianceId, (int)Departments.R_Political, 3, 8, 1),

                new Assignment(RebelAllianceId, (int)Departments.R_War, 4, 1, 1),
                new Assignment(RebelAllianceId, (int)Departments.R_War, 4, 3, 1),

                new Assignment(RebelAllianceId, (int)Departments.R_Jedi, 5, 1, 1),
                new Assignment(RebelAllianceId, (int)Departments.R_Jedi, 6, 1, 1),

                new Assignment(RebelAllianceId, (int)Departments.R_Jedi, 7, 3, 1),

                new Assignment(RebelAllianceId, (int)Departments.R_Jedi, 8, 4, 1),
                new Assignment(RebelAllianceId, (int)Departments.R_Jedi, 8, 5, 1),

                new Assignment(GalacticEmpireId, (int)Departments.G_DeathStar, 9, 11, 1),

                new Assignment(GalacticEmpireId, (int)Departments.G_Sith, 10, 9, 1),
                new Assignment(GalacticEmpireId, (int)Departments.G_Sith, 10, 10, 1),

                new Assignment(GalacticEmpireId, (int)Departments.G_Defense, 11, 9, 1),
                new Assignment(GalacticEmpireId, (int)Departments.G_Defense, 11, 11, 1),

                new Assignment(GalacticEmpireId, (int)Departments.G_Sith, 12, 10, 1),

                new Assignment(GalacticEmpireId, (int)Departments.G_Defense, 11, 10, 1),
                new Assignment(GalacticEmpireId, (int)Departments.G_Defense, 11, 11, 1),
                new Assignment(GalacticEmpireId, (int)Departments.G_Defense, 11, 12, 1),

                new Assignment(GalacticEmpireId, (int)Departments.G_Sith, 12, 10, 1),
                new Assignment(GalacticEmpireId, (int)Departments.G_Sith, 12, 11, 1),
                new Assignment(GalacticEmpireId, (int)Departments.G_Sith, 12, 12, 1),

                new Assignment(GalacticEmpireId, (int)Departments.G_Economy, 13, 10, 1),
                new Assignment(GalacticEmpireId, (int)Departments.G_Economy, 13, 11, 1),
                new Assignment(GalacticEmpireId, (int)Departments.G_Economy, 13, 12, 1),

                new Assignment(GalacticEmpireId, (int)Departments.G_Defense, 11, 11, 1)
            };

            context.Assignments.AddRange(domains);
            context.SaveChanges();
        }
        #endregion
    }

    public enum Departments
    {
        R_Jedi = 1,
        R_Political = 2,
        R_War = 3,
        G_DeathStar = 4,
        G_Defense = 5,
        G_Economy = 6,
        G_Sith = 7,
    }
}