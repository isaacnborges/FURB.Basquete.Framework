using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Interfaces;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class AppServiceBase<TEntity> : IAppServiceBase<TEntity> where TEntity : class, IEntity
    {
        private readonly Domain.Interfaces.Services.IServiceBase<TEntity> _serviceBase;

        public AppServiceBase(Domain.Interfaces.Services.IServiceBase<TEntity> service)
        {
            _serviceBase = service;
        }

        public TEntity Add(TEntity model)
        {
            return _serviceBase.Add(model);
        }

        public IEnumerable<TEntity> Add(IEnumerable<TEntity> models)
        {
            return _serviceBase.Add(models);
        }

        public Task<TEntity> AddAsync(TEntity model)
        {
            return _serviceBase.AddAsync(model);
        }

        public Task<IEnumerable<TEntity>> AddAsync(IEnumerable<TEntity> models)
        {
            return _serviceBase.AddAsync(models);
        }

        public bool Delete(Expression<Func<TEntity, bool>> filter)
        {
            return _serviceBase.Delete(filter);
        }

        public Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> filter)
        {
            return _serviceBase.DeleteAsync(filter);
        }

        public void Dispose()
        {
            _serviceBase.Dispose();
        }

        public bool Edit(Expression<Func<TEntity, bool>> filter, TEntity model)
        {
            return _serviceBase.Edit(filter, model);
        }

        public Task<bool> EditAsync(Expression<Func<TEntity, bool>> filter, TEntity model)
        {
            return _serviceBase.EditAsync(filter, model);
        }

        public TEntity Find(Expression<Func<TEntity, bool>> filter)
        {
            return _serviceBase.Find(filter);
        }

        public Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> filter)
        {
            return _serviceBase.FindAsync(filter);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _serviceBase.GetAll();
        }

        public IEnumerable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter)
        {
            return _serviceBase.GetAll(filter);
        }

        public IEnumerable<TEntity> GetAll<Tkey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, Tkey>> orderBy)
        {
            return _serviceBase.GetAll(filter, orderBy);
        }

        public Task<IList<TEntity>> GetAllAsync()
        {
            return _serviceBase.GetAllAsync();
        }

        public Task<IList<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter)
        {
            return _serviceBase.GetAllAsync(filter);
        }

        public Task<IList<TEntity>> GetAllAsync<Tkey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, Tkey>> orderBy)
        {
            return _serviceBase.GetAllAsync(filter, orderBy);
        }

        public IList<TEntity> List<Tkey>(Expression<Func<TEntity, Tkey>> orderBy, Expression<Func<TEntity, bool>> filter = null)
        {
            return _serviceBase.List(orderBy, filter);
        }

        public Task<IList<TEntity>> ListAsync<Tkey>(Expression<Func<TEntity, Tkey>> orderBy, Expression<Func<TEntity, bool>> filter = null)
        {
            return _serviceBase.ListAsync(orderBy, filter);
        }

        public bool Update(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _serviceBase.Update(filter, update);
        }

        public bool UpdateAll(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _serviceBase.UpdateAll(filter, update);
        }

        public Task<bool> UpdateAllAsync(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _serviceBase.UpdateAllAsync(filter, update);
        }

        public Task<bool> UpdateAsync(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _serviceBase.UpdateAsync(filter, update);
        }
    }
}
