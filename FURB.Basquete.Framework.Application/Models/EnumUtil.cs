using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Application.Models
{
    public static class EnumUtil
    {
        public static T ParseEnum<T>(string value)
        {
            return (T)Enum.Parse(typeof(T), value, true);
        }
    }
}
