using FURB.Basquete.Framework.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public class TemporadaJogador : Entity
    {
        public int Ano { get; set; }
        public IList<JogadorEstatistica> Jogadores { get; set; }
    }
}
