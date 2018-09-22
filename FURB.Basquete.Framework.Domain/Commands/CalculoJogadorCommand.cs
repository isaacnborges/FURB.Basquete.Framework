using FURB.Basquete.Framework.Domain.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class CalculoJogadorCommand : CalculoBaseCommand
    {
        public TipoCategoriaAvancada? CategoriaAvancada { get; set; }
        public TipoPosicao Posicao { get; set; }
    }
}
