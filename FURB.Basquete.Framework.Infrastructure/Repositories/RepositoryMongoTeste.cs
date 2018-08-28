using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace FURB.Basquete.Framework.Infrastructure.Repositories
{
    public class RepositoryMongoTeste
    {
        MongoClient mongo;
        public readonly IMongoDatabase dbMongo;
        public IMongoCollection<BsonDocument> _collection;
        public string _nameCollection;
        protected const string MONGODB_DATABASENAME = "dbze";
        protected const string MONGODB_CREDENTIAL = "admin";

        public RepositoryMongoTeste()
        {
            var folder = string.Empty;
            if (System.IO.Directory.Exists(System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "bin")))
                folder = "bin";

            //var fileMap = System.Xml.Linq.XElement.Load(System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, folder, ConfigurationManager.AppSettings["mongodb"]));
            var fileMap = System.Xml.Linq.XElement.Load(System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, folder));
            var mongoConfiguration = fileMap.Elements();
            if (mongoConfiguration == null)
                throw new InvalidOperationException("Sessão de configuração 'Mongo' não defenido no arquivo de configuração.");

            var serversNodes = mongoConfiguration.FirstOrDefault(x => x.Name == "servers").Nodes();

            var serverNodesConfigs = serversNodes
                .Select(x =>
                {
                    var server = ((System.Xml.Linq.XElement)x).Value.Split(':');
                    return new MongoServerAddress(server[0], Convert.ToInt32(server[1]));

                }).ToArray<MongoServerAddress>();

            var credentials = mongoConfiguration.FirstOrDefault(x => x.Name == "credential").Value;
            var replica = mongoConfiguration.FirstOrDefault(x => x.Name == "replica").Value;
            var dbName = mongoConfiguration.FirstOrDefault(x => x.Name == "databasename").Value;

            var settings = new MongoClientSettings
            {
                Servers = serverNodesConfigs,
                ConnectionMode = ConnectionMode.ReplicaSet,
                ConnectTimeout = TimeSpan.FromMilliseconds(10000),
                SocketTimeout = TimeSpan.FromMilliseconds(0),
                //addkey
                ReplicaSetName = replica,

                //default: 2 segundos => TESTE: TimeSpan.FromSeconds(1) erro de conexão
                //HeartbeatInterval = TimeSpan.FromSeconds(1),

                /// a leitura será reealizada na replica com menos latência de rede, independente da replica
                /// podendo ser até a replica considerada primária.
                ReadPreference = ReadPreference.Nearest,

                /// tempo de resposta para escrita nas replicas secundárias, além da réplica primária
                /// o retorno, a confirmação só irá acontecer após todas as escritas serem propagadas para a quantidade de replicas configuradas
                /// WriteConcern = new WriteConcern(WriteConcern.WValue.Parse("3"), wTimeout: TimeSpan.Parse("10")),

                //addkey
                Credential = MongoCredential.CreateCredential(credentials, credentials, credentials)
            };

            //mongo = new MongoClient(connectionString);
            mongo = new MongoClient(settings);

            if (mongo != null)
            {
                //dbMongo = mongo.GetDatabase(MongoUrl.Create(connectionString).DatabaseName);
                dbMongo = mongo.GetDatabase(dbName);
            }
        }

        public void Dispose()
        {

        }

        public TEntity GetById<TEntity>(Guid id) where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl);
            var filter = Builders<TEntity>.Filter.Eq("_id", id);

            return _collection.Find(filter).FirstOrDefault<TEntity>();
        }
        public TEntity GetById<TEntity>(TEntity obj) where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl);
            //var filter = Builders<TEntity>.Filter.Eq("_id", ObjectId.Parse(obj.Id.ToString()));
            var filter = Builders<TEntity>.Filter.Empty;

            return _collection.Find(filter).FirstOrDefault<TEntity>();
        }
        public IQueryable<TEntity> GetAll<TEntity>() where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl);

            return _collection.Find(new BsonDocument()).ToEnumerable().AsQueryable();
        }

        public IEnumerable<TEntity> Find<TEntity>(Expression<Func<TEntity, bool>> predicate) where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl).AsQueryable<TEntity>();
            return _collection.Where(predicate.Compile());
        }

        public void Add<TEntity>(TEntity obj) where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl);
            _collection.InsertOne(obj);
        }

        public void Update<TEntity>(TEntity obj) where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl);

            //Expression<Func<TEntity, bool>> filter = x => x.Id.Equals(obj.Id.ToString());
            var filter = Builders<TEntity>.Filter.Empty;
            _collection.ReplaceOne(filter, obj);
        }

        public void AddOrUpdate<TEntity, TId>(TEntity entity, TId id) where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl);
            //Expression<Func<TEntity, bool>> filter;
            if (id.ToString() != Guid.Empty.ToString())
            {
                //filter = x => x.Id.Equals(id.ToString());
                var filter = Builders<TEntity>.Filter.Empty;
                _collection.ReplaceOne(filter, entity);
            }
            else
            {
                _collection.InsertOne(entity);
            }
        }

        public void Remove<TEntity>(Guid id) where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl);

            //Expression<Func<TEntity, bool>> filter = x => x.Id.Equals(id.ToString());
            var filter = Builders<TEntity>.Filter.Empty;
            _collection.DeleteOne(filter);
        }

        public void Remove<TEntity>(TEntity entity) where TEntity : class//, IEntity
        {
            var _nameColl = typeof(TEntity).Name.ToLower();
            var _collection = dbMongo.GetCollection<TEntity>(_nameColl);

            //Expression<Func<TEntity, bool>> filter = x => x.Id.Equals(entity.Id.ToString());
            var filter = Builders<TEntity>.Filter.Empty;
            _collection.DeleteOne(filter);
        }

    }
}
