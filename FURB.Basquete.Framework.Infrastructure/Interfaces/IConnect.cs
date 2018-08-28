using MongoDB.Driver;
using System;

namespace FURB.Basquete.Framework.Infrastructure.Interfaces
{
    public interface IConnect : IDisposable
    {
        IMongoCollection<T> Collection<T>(string CollectionName);
    }
}
