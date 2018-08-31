using FURB.Basquete.Framework.Domain.Interfaces;
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
    public class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : class, IEntity
    {        
        protected IConnect _connect { get; private set; }
        protected IMongoCollection<TEntity> _collection { get; private set; }
        protected string _collectionName { get; private set; }
        private bool disposed = false;

        public RepositoryBase(IConnect connect)
        {
            SetCollectionName();
            SetConnectAndCollection(connect);
        }

        public TEntity Add(TEntity model)
        {
            _collection.InsertOne(model);
            return model;
        }

        public IEnumerable<TEntity> Add(IEnumerable<TEntity> models)
        {
            _collection.InsertMany(models);
            return models;
        }

        public async Task<TEntity> AddAsync(TEntity model)
        {
            await _collection.InsertOneAsync(model);
            return model;
        }

        public async Task<IEnumerable<TEntity>> AddAsync(IEnumerable<TEntity> models)
        {
            await _collection.InsertManyAsync(models);
            return models;
        }

        public bool Edit(Expression<Func<TEntity, bool>> filter, TEntity model)
        {
            return _collection
                .ReplaceOne(filter, model)
                .ModifiedCount > 0;
        }

        public async Task<bool> EditAsync(Expression<Func<TEntity, bool>> filter, TEntity model)
        {
            ReplaceOneResult result =
                await _collection
                .ReplaceOneAsync(filter, model);
            return result
                .ModifiedCount > 0;
        }

        public bool Update(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _collection
                .UpdateOne(filter, update)
                .ModifiedCount > 0;
        }

        public bool UpdateAll(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            return _collection
               .UpdateMany(filter, update)
               .ModifiedCount > 0;
        }

        public async Task<bool> UpdateAsync(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            UpdateResult result = await _collection
                .UpdateOneAsync(filter, update);
            return result.ModifiedCount > 0;
        }

        public async Task<bool> UpdateAllAsync(Expression<Func<TEntity, bool>> filter, UpdateDefinition<TEntity> update)
        {
            UpdateResult result = await _collection
                .UpdateManyAsync(filter, update);
            return result.ModifiedCount > 0;
        }

        public TEntity Find(Expression<Func<TEntity, bool>> filter)
        {
            return _collection
                .Find(filter)
                .FirstOrDefault();
        }

        public async Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> filter)
        {
            IAsyncCursor<TEntity> result = await _collection
               .FindAsync(filter);
            return result
                .FirstOrDefault();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _collection
                .AsQueryable()
                .AsEnumerable();
        }

        public IEnumerable<TEntity> GetAll(Expression<Func<TEntity, bool>> filter)
        {
            return _collection
                .AsQueryable()
                .Where(filter)
                .AsEnumerable();
        }

        public IEnumerable<TEntity> GetAll<Tkey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, Tkey>> orderBy)
        {
            return _collection
                .AsQueryable()
                .Where(filter)
                .OrderBy(orderBy)
                .AsEnumerable();
        }

        public async Task<IList<TEntity>> GetAllAsync()
        {
            return await _collection
              .AsQueryable()
              .ToListAsync();

        }

        public async Task<IList<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter)
        {
            return await _collection
                .AsQueryable()
                .Where(filter)
                .ToListAsync();
        }

        public async Task<IList<TEntity>> GetAllAsync<Tkey>(Expression<Func<TEntity, bool>> filter, Expression<Func<TEntity, Tkey>> orderBy)
        {
            return await _collection
                .AsQueryable()
                .Where(filter)
                .OrderBy(orderBy)
                .ToListAsync();
        }

        public IList<TEntity> List<Tkey>(Expression<Func<TEntity, Tkey>> orderBy, Expression<Func<TEntity, bool>> filter = null)
        {
            IMongoQueryable<TEntity> query = _collection.AsQueryable();
            if (filter != null)
                return query.Where(filter).OrderBy(orderBy).ToList();
            return query.OrderBy(orderBy).ToList();
        }

        public async Task<IList<TEntity>> ListAsync<Tkey>(Expression<Func<TEntity, Tkey>> orderBy, Expression<Func<TEntity, bool>> filter = null)
        {
            IMongoQueryable<TEntity> query = _collection.AsQueryable();
            if (filter != null)
                return await query.Where(filter).OrderBy(orderBy).ToListAsync();
            return await query.OrderBy(orderBy).ToListAsync();
        }

        public long Count()
        {
            return _collection.CountDocuments(Builders<TEntity>.Filter.Empty);
        }

        public long Count(Expression<Func<TEntity, bool>> filter, CountOptions options = null)
        {
            return _collection.CountDocuments(filter, options);
        }

        public async Task<long> CountAsync()
        {
            return await _collection.CountDocumentsAsync(Builders<TEntity>.Filter.Empty);
        }

        public async Task<long> CountAsync(Expression<Func<TEntity, bool>> filter, CountOptions options = null)
        {
            return await _collection.CountDocumentsAsync(filter, options);
        }

        public bool Delete(Expression<Func<TEntity, bool>> filter)
        {
            return _collection
                .DeleteOne(filter)
                .DeletedCount > 0;
        }

        public async Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> filter)
        {
            DeleteResult result = await _collection.
                DeleteOneAsync(filter);
            return result.DeletedCount > 0;
        }

        public IMongoQueryable<TEntity> Query()
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
            MongoCollectionName mongoCollectionName = (MongoCollectionName)typeof(TEntity)
               .GetTypeInfo()
               .GetCustomAttribute(typeof(MongoCollectionName));

            _collectionName = mongoCollectionName != null
                ? mongoCollectionName.TableName
                : typeof(TEntity).Name.ToLower();

            mongoCollectionName = null;
        }

        internal void SetConnectAndCollection(IConnect connect)
        {
            _connect = connect;
            _collection = _connect.Collection<TEntity>(_collectionName);
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
