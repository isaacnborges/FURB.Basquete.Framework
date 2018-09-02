using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class JogadorEstatistica
    {
        public Guid Jogador_ID { get; set; }
        public IList<EstatisticaPer36Jogador> EstatsticaPer36 { get; set; }
        public IList<EstatisticaAvancada> EstatsticaAvancada { get; set; }
    }
}
