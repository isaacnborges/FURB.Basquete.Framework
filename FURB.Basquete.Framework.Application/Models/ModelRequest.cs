﻿using System.Collections.Generic;

namespace FURB.Basquete.Framework.Application.Models
{
    public class ModelRequest<T> where T : class
    {
        public string Action { get; set; }

        public string Table { get; set; }

        public string KeyColumn { get; set; }

        public object Key { get; set; }

        public T Value { get; set; }

        public List<T> Added { get; set; }

        public List<T> Changed { get; set; }

        public List<T> Deleted { get; set; }

        public IDictionary<string, object> @params { get; set; }
    }
}
