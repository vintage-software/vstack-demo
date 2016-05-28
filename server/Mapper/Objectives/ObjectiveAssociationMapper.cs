using Mapper.General.Mappers;
using Vstack.Services.Mapper.General;
using Dmn = Domain.Objectives;

namespace Mapper.Objectives
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