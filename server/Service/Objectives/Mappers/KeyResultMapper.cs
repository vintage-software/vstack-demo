using Service.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Mappers
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