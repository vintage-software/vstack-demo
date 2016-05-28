namespace Service.General.Dto
{
    public interface IDepartmentDto : ICompanyDto
    {
        int DepartmentId { get; set; }
    }
}