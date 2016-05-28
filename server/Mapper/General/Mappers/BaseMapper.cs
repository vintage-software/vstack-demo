﻿using Vstack.Services.Data.General;
using Vstack.Services.Mapper.Mappers;

namespace Mapper.General.Mappers
{
    public abstract class BaseMapper<TDmn> : BaseEfMapper<OkrDbContext, TDmn>
        where TDmn : class, IDataDomain
    {
        public BaseMapper(string connectionString)
            : base(new OkrDbContext(connectionString))
        {
        }
    }
}