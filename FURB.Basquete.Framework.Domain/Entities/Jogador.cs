using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public class Jogador : Entity
    {
        public string Nome { get; set; }

        public double Posicao { get; set; }
    }
}
