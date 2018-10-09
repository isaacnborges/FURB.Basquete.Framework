using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Application.Models
{
    public class CalculoJogadorEspecificoModel
    {
        public int AnoBase { get; set; }
        public string Criterio { get; set; }
        public string NomeJogador { get; set; }
        public bool FiltrarJogadores { get; set; }
        public int? QuantidadeJogos { get; set; }
    }
}
