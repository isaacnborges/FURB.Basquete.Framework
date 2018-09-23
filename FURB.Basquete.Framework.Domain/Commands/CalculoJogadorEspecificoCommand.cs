using FURB.Basquete.Framework.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class CalculoJogadorEspecificoCommand
    {
        public int AnoTemporada { get; set; }
        public string Nome { get; set; }
        public string Posicao { get; set; }
        public double ValorEstatistica { get; set; }
        public EstatisticaPer36 EstatisticaPer36Jogador { get; set; }
        public EstatisticaPer36 EstatisticaPer36Media { get; set; }
        public EstatisticaAvancada EstatisticaAvancadaJogador { get; set; }
        public EstatisticaAvancada EstatisticaAvancadaMedia { get; set; }
    }
}
