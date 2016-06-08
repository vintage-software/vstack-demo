using Service.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Mappers
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