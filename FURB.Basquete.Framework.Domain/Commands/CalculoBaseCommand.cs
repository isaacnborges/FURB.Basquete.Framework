using FURB.Basquete.Framework.Domain.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class CalculoBaseCommand
    {
        public int AnoInicio { get; set; }
        public int AnoFim { get; set; }
        public TipoCalculo TipoCalculo { get; set; }
        public TipoCriterio Criterio { get; set; }
        public TipoCategoria? Categoria { get; set; }
        public bool MediaIsolada { get; set; }
    }
}
