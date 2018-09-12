using FURB.Basquete.Framework.Domain.Entities;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Response
{
    public class TemporadaTimeResponse
    {
        public Time Time { get; set; }
        public IList<EstatisticaTimeResponse> Estatisticas { get; set; }
    }    
}
