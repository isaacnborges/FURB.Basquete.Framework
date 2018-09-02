using FURB.Basquete.Framework.Domain.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.ApplicationService.Interfaces
{
    public interface IAppServiceBase<TEntity> : IDisposable where TEntity : class, IEntity
    {
        TEntity Add(TEntity model);
        IEnumerable<TEntity> Add(IEnumerable<TEntity> models);
        Task<TEntity> AddAsync(TEntity model);
        Task<IEnumerable<TEntity>> AddAsync(IEnumerable<TEntity> models);

        bool Edit(Expression<Func<TEntity, bool>> filter, TEntity model);
        Task<bool> EditAsync(Expression<Func<TEntity, bool>> filter, TEntity model);

        bool Update(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update);
        bool UpdateAll(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update);
        Task<bool> UpdateAsync(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update);
        Task<bool> UpdateAllAsync(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update);

        TEntity Find(Expression<Func<TEntity, bool>> filter);
        Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> filter);

        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter);
        IEnumerable<TEntity> GetAll<Tkey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, Tkey>> orderBy);
        Task<IList<TEntity>> GetAllAsync();
        Task<IList<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter);
        Task<IList<TEntity>> GetAllAsync<Tkey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, Tkey>> orderBy);

        IList<TEntity> List<Tkey>(Expression<Func<TEntity, Tkey>> orderBy, Expression<Func<TEntity, bool>> filter = null);
        Task<IList<TEntity>> ListAsync<Tkey>(Expression<Func<TEntity, Tkey>> orderBy, Expression<Func<TEntity, bool>> filter = null);

        bool Delete(Expression<Func<TEntity, bool>> filter);
        Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> filter);
    }
}
