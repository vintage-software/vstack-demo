using System;
using Domain.General;
using Service.General;
using Service.General.Dto;
using Vstack.Services.Mapper.General;
using Vstack.Services.Service.Converters;
using Vstack.Services.Service.Services;
using Vstack.Api.Web.Controllers;

namespace WebApi.General
{
    public class BaseController<TDto, TDmn, TMapper, TConverter>
        : EntityRestfulController<TDto, TDmn, TMapper, TConverter, Permissions>
        where TDto : class, IDto
        where TDmn : class, IDomain
        where TConverter : class, IDomainConverter<TDto, TDmn, Permissions>, new()
        where TMapper : IMapper<TDmn>
    {
        public BaseController(BaseService<TDto, TDmn, TMapper, TConverter, Permissions> service)
            : base(service)
        {
        }

        protected override bool Decode
        {
            get
            {
                return false;
            }
        }

        public override Permissions GetPermissions()
        {
            return new Permissions();
        }
    }
}