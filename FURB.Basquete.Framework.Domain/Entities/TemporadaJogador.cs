using FURB.Basquete.Framework.Domain.Models;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public class TemporadaJogador : Entity
    {
        public int Ano { get; set; }
        public IList<JogadorEstatistica> Jogadores { get; set; }
    }
}
