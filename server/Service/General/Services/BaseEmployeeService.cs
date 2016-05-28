using Domain.General;
using Service.General.Dto;
using System;
using Vstack.Services.Mapper.General;
using Vstack.Services.Service.Converters;
using Vstack.Services.Service.General;
using Vstack.Services.Service.Services;

namespace Service.General.Services
{
    public abstract class BaseEmployeeService<TDto, TDmn, TMapper, TConverter, TPermissions>
        : BaseDoubleChildService<TDto, TDmn, TMapper, TConverter, TPermissions>
        where TDto : class, IEmployeeDto
        where TDmn : class, IEmployeeDomain
        where TMapper : IDoubleChildMapper<TDmn>
        where TConverter : class, IDomainConverter<TDto, TDmn, TPermissions>, new()
        where TPermissions : RestPermissions, new()
    {
        protected override Action<TDto, int> SetGrandParentId
        {
            get
            {
                return (dto, grandParentId) => dto.CompanyId = grandParentId;
            }
        }

        protected override Action<TDto, int> SetParentId
        {
            get
            {
                return (dto, parentId) => dto.EmployeeId = parentId;
            }
        }

        public BaseEmployeeService(TMapper mapper, TPermissions permissions) : base(mapper, permissions) { }
    }
}