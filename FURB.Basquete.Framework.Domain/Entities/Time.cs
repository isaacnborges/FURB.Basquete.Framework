﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public class Time : Entity
    {
        public string Nome { get; set; }

        public double Sigla { get; set; }
    }
}