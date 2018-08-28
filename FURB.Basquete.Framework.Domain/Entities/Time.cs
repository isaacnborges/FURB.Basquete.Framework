using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public class Time
    {
        [BsonRequired()]
        [BsonId()]
        public ObjectId Id { get; set; }

        [BsonRequired()]
        [BsonElement("nome")]
        public string Nome { get; set; }

        [BsonRequired()]
        [BsonElement("sigla")]
        public double Sigla { get; set; }
    }
}
