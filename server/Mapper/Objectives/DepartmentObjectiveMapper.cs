using Mapper.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Mapper.Objectives
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