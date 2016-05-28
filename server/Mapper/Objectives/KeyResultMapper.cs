using Mapper.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Mapper.Objectives
{
    public class KeyResultMapper
        : BaseCompanyAndDepartmentMapper<Dmn.KeyResult>
    {
        public KeyResultMapper(DbSettings dbSettings)
            : base(dbSettings.ConnectionString)
        {
        }
    }
}