using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class EstatisticaPer36Jogador : EstatisticaPer36
    {
        public int Idade { get; set; }
        public string SiglaTime { get; set; }
        public int Jogos { get; set; }
        public int JogosIniciados { get; set; }
    }
}
