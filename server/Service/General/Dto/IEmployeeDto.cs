namespace Service.General.Dto
{
    public interface IEmployeeDto : ICompanyDto
    {
        int EmployeeId { get; set; }
    }
}