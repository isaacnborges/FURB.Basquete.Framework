using System;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class JogadorEstatistica
    {
        public Guid Jogador_ID { get; set; }
        public string Jogador_Posicao { get; set; }
        public EstatisticaPer36Jogador EstatsticaPer36 { get; set; }
        public EstatisticaAvancada EstatsticaAvancada { get; set; }
    }
}
