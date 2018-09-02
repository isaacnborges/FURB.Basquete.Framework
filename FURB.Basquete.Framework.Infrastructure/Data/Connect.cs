﻿using FURB.Basquete.Framework.Infrastructure.Interfaces;
using MongoDB.Driver;
using System;

namespace FURB.Basquete.Framework.Infrastructure.Data
{
    public class Connect : IDisposable, IConnect
    {
        protected MongoClient Client { get; private set; }

        protected IMongoDatabase DataBase { get; private set; }

        public IMongoCollection<T> Collection<T>(string CollectionName)
        {
            return DataBase.GetCollection<T>(CollectionName);
        }

        public Connect(IConfig config)
        {
            Client = new MongoClient(config.MongoConnectionString);
            DataBase = Client.GetDatabase(config.MongoDatabase);
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
                    DataBase = null;
                    Client = null;
                }
                disposed = true;
            }
        }
        ~Connect()
        {
            Dispose(false);
        }
        private bool disposed = false;
    }
}
