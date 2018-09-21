using FURB.Basquete.Framework.Domain.Entities;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Response
{
    public class TemporadaJogadorResponse
    {
        public Jogador Jogador { get; set; }
        public IList<EstatisticaJogadorResponse> Estatisticas { get; set; }
    }
}
