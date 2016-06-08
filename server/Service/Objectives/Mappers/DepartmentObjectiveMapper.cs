using Service.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Mappers
{
    public class DepartmentObjectiveMapper
        : BaseDepartmentMapper<Dmn.DepartmentObjective>
    {
        public DepartmentObjectiveMapper(DbSettings dbSettings)
            : base(dbSettings.ConnectionString)
        {
        }
    }
}