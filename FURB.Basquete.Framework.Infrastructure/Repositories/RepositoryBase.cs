using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Infrastructure.Interfaces;
using FURB.Basquete.Framework.Infrastructure.MongoAttribute;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Infrastructure.Repositories
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class, new()
    {        
        protected IConnect _connect { get; private set; }
        protected IMongoCollection<T> _collection { get; private set; }
        protected string _collectionName { get; private set; }
        private bool disposed = false;

        public RepositoryBase(IConnect connect)
        {
            SetCollectionName();
            SetConnectAndCollection(connect);
        }

        public T Add(T model)
        {
            _collection.InsertOne(model);
            return model;

            //var _nameColl = typeof(TEntity).Name.ToLower();
            //var _collection = dbMongo.GetCollection<TEntity>(_nameColl);
            //_collection.InsertOne(obj);
        }

        public IEnumerable<T> Add(IEnumerable<T> models)
        {
            _collection.InsertMany(models);
            return models;
        }

        public async Task<T> AddAsync(T model)
        {
            await _collection.InsertOneAsync(model);
            return model;
        }

        public async Task<IEnumerable<T>> AddAsync(IEnumerable<T> models)
        {
            await _collection.InsertManyAsync(models);
            return models;
        }

        public bool Edit(Expression<Func<T, bool>> filter, T model)
        {
            return _collection
                .ReplaceOne(filter, model)
                .ModifiedCount > 0;
        }

        public async Task<bool> EditAsync(Expression<Func<T, bool>> filter, T model)
        {
            ReplaceOneResult result =
                await _collection
                .ReplaceOneAsync(filter, model);
            return result
                .ModifiedCount > 0;
        }

        public bool Update(Expression<Func<T, bool>> filter, UpdateDefinition<T> update)
        {
            return _collection
                .UpdateOne(filter, update)
                .ModifiedCount > 0;
        }

        public bool UpdateAll(Expression<Func<T, bool>> filter, UpdateDefinition<T> update)
        {
            return _collection
               .UpdateMany(filter, update)
               .ModifiedCount > 0;
        }

        public async Task<bool> UpdateAsync(Expression<Func<T, bool>> filter, UpdateDefinition<T> update)
        {
            UpdateResult result = await _collection
                .UpdateOneAsync(filter, update);
            return result.ModifiedCount > 0;
        }

        public async Task<bool> UpdateAllAsync(Expression<Func<T, bool>> filter, UpdateDefinition<T> update)
        {
            UpdateResult result = await _collection
                .UpdateManyAsync(filter, update);
            return result.ModifiedCount > 0;
        }

        public T Find(Expression<Func<T, bool>> filter)
        {
            return _collection
                .Find(filter)
                .FirstOrDefault();
        }

        public async Task<T> FindAsync(Expression<Func<T, bool>> filter)
        {
            IAsyncCursor<T> result = await _collection
               .FindAsync(filter);
            return result
                .FirstOrDefault();
        }

        public IEnumerable<T> GetAll()
        {
            return _collection
                .AsQueryable()
                .AsEnumerable();
        }

        public IEnumerable<T> GetAll(Expression<Func<T, bool>> filter)
        {
            return _collection
                .AsQueryable()
                .Where(filter)
                .AsEnumerable();
        }

        public IEnumerable<T> GetAll<Tkey>(Expression<Func<T, bool>> filter, Expression<Func<T, Tkey>> orderBy)
        {
            return _collection
                .AsQueryable()
                .Where(filter)
                .OrderBy(orderBy)
                .AsEnumerable();
        }

        public async Task<IList<T>> GetAllAsync()
        {
            return await _collection
              .AsQueryable()
              .ToListAsync();

        }

        public async Task<IList<T>> GetAllAsync(Expression<Func<T, bool>> filter)
        {
            return await _collection
                .AsQueryable()
                .Where(filter)
                .ToListAsync();
        }

        public async Task<IList<T>> GetAllAsync<Tkey>(Expression<Func<T, bool>> filter, Expression<Func<T, Tkey>> orderBy)
        {
            return await _collection
                .AsQueryable()
                .Where(filter)
                .OrderBy(orderBy)
                .ToListAsync();
        }

        public IList<T> List<Tkey>(Expression<Func<T, Tkey>> orderBy, Expression<Func<T, bool>> filter = null)
        {
            IMongoQueryable<T> query = _collection.AsQueryable();
            if (filter != null)
                return query.Where(filter).OrderBy(orderBy).ToList();
            return query.OrderBy(orderBy).ToList();
        }

        public async Task<IList<T>> ListAsync<Tkey>(Expression<Func<T, Tkey>> orderBy, Expression<Func<T, bool>> filter = null)
        {
            IMongoQueryable<T> query = _collection.AsQueryable();
            if (filter != null)
                return await query.Where(filter).OrderBy(orderBy).ToListAsync();
            return await query.OrderBy(orderBy).ToListAsync();
        }

        public long Count()
        {
            return _collection.Count(Builders<T>.Filter.Empty);
        }

        public long Count(Expression<Func<T, bool>> filter, CountOptions options = null)
        {
            return _collection.Count(filter, options);
        }

        public async Task<long> CountAsync()
        {
            return await _collection.CountAsync(Builders<T>.Filter.Empty);
        }

        public async Task<long> CountAsync(Expression<Func<T, bool>> filter, CountOptions options = null)
        {
            return await _collection.CountAsync(filter, options);
        }

        public bool Delete(Expression<Func<T, bool>> filter)
        {
            return _collection
                .DeleteOne(filter)
                .DeletedCount > 0;
        }

        public async Task<bool> DeleteAsync(Expression<Func<T, bool>> filter)
        {
            DeleteResult result = await _collection.
                DeleteOneAsync(filter);
            return result.DeletedCount > 0;
        }

        public IMongoQueryable<T> Query()
        {
            return _collection
                .AsQueryable();
        }

        public ObjectId CreateObjectId(string value)
        {
            return ObjectId.Parse(value);
        }

        internal void SetCollectionName()
        {
            MongoCollectionName mongoCollectionName = (MongoCollectionName)typeof(T)
               .GetTypeInfo()
               .GetCustomAttribute(typeof(MongoCollectionName));

            _collectionName = mongoCollectionName != null
                ? mongoCollectionName.TableName
                : typeof(T).Name.ToLower();

            mongoCollectionName = null;
        }

        internal void SetConnectAndCollection(IConnect connect)
        {
            _connect = connect;
            _collection = _connect.Collection<T>(_collectionName);
        }        

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _collection = null;
                    _connect = null;
                }
                disposed = true;
            }
        }

        ~RepositoryBase()
        {
            Dispose(false);
        }        
    }
}
