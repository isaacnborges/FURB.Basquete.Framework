using System.Reflection;

namespace FURB.Basquete.Framework.Application.Models
{
    public static class ClassUtil
    {
        public static PropertyInfo GetProperty<TEntity>(string name) where TEntity : class
        {
            var properties = typeof(TEntity).GetProperties();
            PropertyInfo prop = null;
            foreach (var item in properties)
            {
                if (item.Name.ToLower().Equals(name.ToLower()))
                {
                    prop = item;
                    break;
                }
            }
            return prop;
        }
    }
}
