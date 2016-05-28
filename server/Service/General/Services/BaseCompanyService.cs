using Domain.General;
using Service.General.Dto;
using System;
using Vstack.Services.Mapper.General;
using Vstack.Services.Service.Converters;
using Vstack.Services.Service.General;
using Vstack.Services.Service.Services;

namespace Service.General.Services
{
    public abstract class BaseCompanyService<TDto, TDmn, TMapper, TConverter, TPermissions>
        : BaseChildService<TDto, TDmn, TMapper, TConverter, TPermissions>
        where TDto : class, ICompanyDto
        where TDmn : class, ICompanyDomain
        where TMapper : IChildMapper<TDmn>
        where TConverter : class, IDomainConverter<TDto, TDmn, TPermissions>, new()
        where TPermissions : RestPermissions, new()
    {
        protected override Action<TDto, int> SetParentId
        {
            get
            {
                return (dto, parentId) => dto.CompanyId = parentId;
            }
        }

        public BaseCompanyService(TMapper mapper, TPermissions permissions) : base(mapper, permissions) { }
    }
}