using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class JogadorEstatistica
    {
        public Guid Jogador_ID { get; set; }
        public ICollection<EstatisticaPer36Jogador> EstatsticaPer36 { get; set; }
        public ICollection<EstatisticaAvancada> EstatsticaAvancada { get; set; }
    }
}
