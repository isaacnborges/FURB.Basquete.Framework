﻿using System;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Application.Models.Graficos
{
    public class DataSource
    {
        public DataSource()
        {
            Dados = new List<object>();
        }
        public List<Object> Dados { get; set; }
    }
}
