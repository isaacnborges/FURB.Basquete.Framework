using FURB.Basquete.Framework.Infrastructure.Interfaces;
using Microsoft.Extensions.Configuration;

namespace FURB.Basquete.Framework.Infrastructure.Data
{
    public class Config : IConfig
    {
        public Config(IConfiguration configuration)
        {
            IConfigurationSection section = configuration.GetSection("MongoDB");
            MongoConnectionString = section["ConnectionStrings"];
            MongoDatabase = section["Database"];
        }

        public Config(string connectionString, string database)
        {
            MongoConnectionString = connectionString;
            MongoDatabase = database;
        }

        public string MongoConnectionString { get; private set; }
        public string MongoDatabase { get; private set; }
    }
}
