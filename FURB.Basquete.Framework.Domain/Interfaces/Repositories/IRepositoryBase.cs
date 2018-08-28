using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Domain.Interfaces.Repositories
{
    public interface IRepositoryBase<T> : IDisposable where T : class, new()
    {
        T Add(T model);
        IEnumerable<T> Add(IEnumerable<T> models);
        Task<T> AddAsync(T model);
        Task<IEnumerable<T>> AddAsync(IEnumerable<T> models);

        bool Edit(Expression<Func<T, bool>> filter, T model);
        Task<bool> EditAsync(Expression<Func<T, bool>> filter, T model);

        bool Update(Expression<Func<T, bool>> filter, UpdateDefinition<T> update);
        bool UpdateAll(Expression<Func<T, bool>> filter, UpdateDefinition<T> update);
        Task<bool> UpdateAsync(Expression<Func<T, bool>> filter, UpdateDefinition<T> update);
        Task<bool> UpdateAllAsync(Expression<Func<T, bool>> filter, UpdateDefinition<T> update);

        T Find(Expression<Func<T, bool>> filter);
        Task<T> FindAsync(Expression<Func<T, bool>> filter);

        IEnumerable<T> GetAll();
        IEnumerable<T> GetAll(Expression<Func<T, bool>> filter);
        IEnumerable<T> GetAll<Tkey>(Expression<Func<T, bool>> filter, Expression<Func<T, Tkey>> orderBy);
        Task<IList<T>> GetAllAsync();
        Task<IList<T>> GetAllAsync(Expression<Func<T, bool>> filter);
        Task<IList<T>> GetAllAsync<Tkey>(Expression<Func<T, bool>> filter, Expression<Func<T, Tkey>> orderBy);

        IList<T> List<Tkey>(Expression<Func<T, Tkey>> orderBy, Expression<Func<T, bool>> filter = null);
        Task<IList<T>> ListAsync<Tkey>(Expression<Func<T, Tkey>> orderBy, Expression<Func<T, bool>> filter = null);

        bool Delete(Expression<Func<T, bool>> filter);
        Task<bool> DeleteAsync(Expression<Func<T, bool>> filter);

        IMongoQueryable<T> Query();

        ObjectId CreateObjectId(string value);

        long Count();
        long Count(Expression<Func<T, bool>> filter, CountOptions options = null);
        Task<long> CountAsync();
        Task<long> CountAsync(Expression<Func<T, bool>> filter, CountOptions options = null);
    }
}
