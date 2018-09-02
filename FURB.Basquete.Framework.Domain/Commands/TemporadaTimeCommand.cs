using FURB.Basquete.Framework.Domain.Models;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class TemporadaTimeCommand
    {
        public int Ano { get; set; }
        public string Nome { get; set; }
        public string Sigla { get; set; }
        public string Conferencia { get; set; }
        public EstatisticaPer36 EstatisticaTime { get; set; }
        public EstatisticaPer36 EstatisticaOponenteTime { get; set; }
    }
}
