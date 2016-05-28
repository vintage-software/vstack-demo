using Mapper.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Mapper.Objectives
{
    public class AssignmentMapper
        : BaseDepartmentMapper<Dmn.Assignment>
    {
        public AssignmentMapper(DbSettings dbSettings)
            : base(dbSettings.ConnectionString)
        {
        }
    }
}