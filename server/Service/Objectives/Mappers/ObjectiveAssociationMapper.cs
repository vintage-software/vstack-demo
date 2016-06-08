using Service.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Service.Objectives.Mappers
{
    public class ObjectiveAssociationMapper
        : BaseCompanyAndDepartmentMapper<Dmn.ObjectiveAssociation>
    {
        public ObjectiveAssociationMapper(DbSettings dbSettings)
            : base(dbSettings.ConnectionString)
        {
        }
    }
}