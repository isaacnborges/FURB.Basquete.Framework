using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Application.Models
{
    public class CalculoTimeModel
    {
        public int AnoInicio { get; set; }
        public int AnoFim { get; set; }
        public int AnoBase { get; set; }
        public string TipoCalculo { get; set; }
        public string Criterio { get; set; }
        public string Categoria { get; set; }
        public string Conferencia { get; set; }
    }
}
