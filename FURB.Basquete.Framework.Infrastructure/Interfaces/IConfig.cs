namespace FURB.Basquete.Framework.Infrastructure.Interfaces
{
    public interface IConfig
    {
        string MongoConnectionString { get; }
        string MongoDatabase { get; }
    }
}
