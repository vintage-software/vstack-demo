using Domain.General;
using Service.General.Dto;
using Service.General.Mappers;
using System;
using System.Collections.Generic;
using System.Linq;
using Vstack.Services.Mapper.Filters;
using Vstack.Services.Mapper.Queryable;
using Vstack.Services.Service.Converters;
using Vstack.Services.Service.General;
using Vstack.Services.Service.Services;

namespace Service.General.Services
{
    public abstract class BaseCompanyAndDepartmentService<TDto, TDmn, TMapper, TConverter, TPermissions>
        : BaseService<TDto, TDmn, TMapper, TConverter, TPermissions>
        where TDto : class, IDepartmentDto
        where TDmn : class, IDepartmentDomain
        where TMapper : ICompanyMapper<TDmn>, IDepartmentMapper<TDmn>
        where TConverter : class, IDomainConverter<TDto, TDmn, TPermissions>, new()
        where TPermissions : RestPermissions, new()
    {
        public BaseCompanyAndDepartmentService(TMapper mapper, TPermissions permissions) : base(mapper, permissions) { }

        #region Company
        public VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetByCompany(int companyId)
        {
            return this.GetByCompany(companyId, null);
        }

        public VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetByCompany(int companyId, int id)
        {
            return this.GetByCompany(companyId, new int[] { id });
        }

        public VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetByCompany(int companyId, IEnumerable<int> ids)
        {
            return ids == null ? this.GetAllByCompany(companyId) : this.GetManyByCompany(companyId, ids);
        }

        protected abstract RestStatus ReadByCompany(int companyId, DeletedState deletedState);

        private VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetAllByCompany(int companyId)
        {
            Func<TMapper, DeletedState, IQueryable<TDmn>> filter = (mapper, deletedState) => mapper.GetByCompany(companyId, deletedState);
            Func<TPermissions, DeletedState, RestStatus> permissions = (perm, deletedState) => this.ReadByCompany(companyId, deletedState);

            return this.GetWithPrimaryFilter(new PrimaryRestFilter<TDmn, TMapper, TPermissions>(filter, permissions));
        }

        private VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetManyByCompany(int companyId, IEnumerable<int> ids)
        {
            Func<TMapper, DeletedState, IQueryable<TDmn>> filter = (mapper, deletedState) => this.GetManyDomainIfInCompany(mapper, companyId, ids, deletedState);
            Func<TPermissions, DeletedState, RestStatus> permissions = (perm, deletedState) => this.ReadByCompany(companyId, deletedState);

            return this.GetWithPrimaryFilter(new PrimaryRestFilter<TDmn, TMapper, TPermissions>(filter, permissions));
        }

        private IQueryable<TDmn> GetManyDomainIfInCompany(TMapper mapper, int parentId, IEnumerable<int> ids, DeletedState deletedState)
        {
            return mapper.GetByIdsIfInCompany(parentId, ids, deletedState);
        }
        #endregion

        #region Department
        public VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetByDepartment(int companyId, int departmentId)
        {
            return this.GetByDepartment(companyId, departmentId, null);
        }

        public VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetByDepartment(int companyId, int departmentId, int id)
        {
            return this.GetByDepartment(companyId, departmentId, new int[] { id });
        }

        public VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetByDepartment(int companyId, int departmentId, IEnumerable<int> ids)
        {
            return ids == null ? this.GetAllByDepartment(companyId, departmentId) : this.GetManyByDepartment(companyId, departmentId, ids);
        }

        protected abstract RestStatus ReadByDepartment(int companyId, int departmentId, DeletedState deletedState);

        private VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetAllByDepartment(int companyId, int departmentId)
        {
            Func<TMapper, DeletedState, IQueryable<TDmn>> filter = (mapper, deletedState) => mapper.GetByDepartment(companyId, companyId, deletedState);
            Func<TPermissions, DeletedState, RestStatus> permissions = (perm, deletedState) => this.ReadByDepartment(companyId, companyId, deletedState);

            return this.GetWithPrimaryFilter(new PrimaryRestFilter<TDmn, TMapper, TPermissions>(filter, permissions));
        }

        private VsQueryable<TDto, TDmn, TMapper, TConverter, TPermissions> GetManyByDepartment(int companyId, int departmentId, IEnumerable<int> ids)
        {
            Func<TMapper, DeletedState, IQueryable<TDmn>> filter = (mapper, deletedState) => this.GetManyDomainIfInDepartment(mapper, companyId, departmentId, ids, deletedState);
            Func<TPermissions, DeletedState, RestStatus> permissions = (perm, deletedState) => this.ReadByDepartment(companyId, departmentId, deletedState);

            return this.GetWithPrimaryFilter(new PrimaryRestFilter<TDmn, TMapper, TPermissions>(filter, permissions));
        }

        private IQueryable<TDmn> GetManyDomainIfInDepartment(TMapper mapper, int grandParentId, int parentId, IEnumerable<int> ids, DeletedState deletedState)
        {
            return mapper.GetByIdsIfInDepartment(grandParentId, parentId, ids, deletedState);
        }
        #endregion
    }
}