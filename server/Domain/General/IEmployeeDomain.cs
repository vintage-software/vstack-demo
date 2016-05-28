namespace Domain.General
{
    public interface IEmployeeDomain : ICompanyDomain
    {
        int EmployeeId { get; }
    }
}