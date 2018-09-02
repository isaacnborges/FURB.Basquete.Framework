using FURB.Basquete.Framework.Domain.Models;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class TemporadaJogadorCommand
    {
        public int Ano { get; set; }
        public string Nome { get; set; }
        public string Posicao { get; set; }
        public EstatisticaPer36Jogador EstatisticaPer36 { get; set; }
        public EstatisticaAvancada EstatsticaAvancada { get; set; }
    }
}
