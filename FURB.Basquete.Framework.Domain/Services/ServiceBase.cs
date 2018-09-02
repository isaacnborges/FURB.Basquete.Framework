using FURB.Basquete.Framework.Domain.Interfaces;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class ServiceBase<TEntity> : IServiceBase<TEntity> where TEntity : class, IEntity
    {
        private readonly IRepositoryBase<TEntity> _repository;

        public ServiceBase(IRepositoryBase<TEntity> repository)
        {
            _repository = repository;
        }

        public TEntity Add(TEntity model)
        {
            return _repository.Add(model);
        }

        public IEnumerable<TEntity> Add(IEnumerable<TEntity> models)
        {
            return _repository.Add(models);
        }

        public Task<TEntity> AddAsync(TEntity model)
        {
            return _repository.AddAsync(model);
        }

        public Task<IEnumerable<TEntity>> AddAsync(IEnumerable<TEntity> models)
        {
            return _repository.AddAsync(models);
        }

        public bool Delete(Expression<Func<TEntity, bool>> filter)
        {
            return _repository.Delete(filter);
        }

        public Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> filter)
        {
            return _repository.DeleteAsync(filter);
        }

        public void Dispose()
        {
            _repository.Dispose();
        }

        public bool Edit(Expression<Func<TEntity, bool>> filter, TEntity model)
        {
            return _repository.Edit(filter, model);
        }

        public Task<bool> EditAsync(Expression<Func<TEntity, bool>> filter, TEntity model)
        {
            return _repository.EditAsync(filter, model);
        }

        public TEntity Find(Expression<Func<TEntity, bool>> filter)
        {
            return _repository.Find(filter);
        }

        public Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> filter)
        {
            return _repository.FindAsync(filter);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _repository.GetAll();
        }

        public IEnumerable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter)
        {
            return _repository.GetAll(filter);
        }

        public IEnumerable<TEntity> GetAll<Tkey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, Tkey>> orderBy)
        {
            return _repository.GetAll(filter, orderBy);
        }

        public Task<IList<TEntity>> GetAllAsync()
        {
            return _repository.GetAllAsync();
        }

        public Task<IList<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter)
        {
            return _repository.GetAllAsync(filter);
        }

        public Task<IList<TEntity>> GetAllAsync<Tkey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, Tkey>> orderBy)
        {
            return _repository.GetAllAsync(filter, orderBy);
        }

        public IList<TEntity> List<Tkey>(Expression<Func<TEntity, Tkey>> orderBy, Expression<Func<TEntity, bool>> filter = null)
        {
            return _repository.List(orderBy, filter);
        }

        public Task<IList<TEntity>> ListAsync<Tkey>(Expression<Func<TEntity, Tkey>> orderBy, Expression<Func<TEntity, bool>> filter = null)
        {
            return _repository.ListAsync(orderBy, filter);
        }

        public bool Update(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _repository.Update(filter, update);
        }

        public bool UpdateAll(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _repository.UpdateAll(filter, update);
        }

        public Task<bool> UpdateAllAsync(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _repository.UpdateAllAsync(filter, update);
        }

        public Task<bool> UpdateAsync(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _repository.UpdateAsync(filter, update);
        }
    }
}
