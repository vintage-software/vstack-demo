namespace Domain.General
{
    public interface IDepartmentDomain : ICompanyDomain
    {
        int DepartmentId { get; }
    }
}