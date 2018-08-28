using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public class Jogador
    {
        [BsonRequired()]
        [BsonId()]
        public ObjectId Id { get; set; }

        [BsonRequired()]
        [BsonElement("nome")]
        public string Nome { get; set; }

        [BsonRequired()]
        [BsonElement("posicao")]
        public double Posicao { get; set; }
    }
}
