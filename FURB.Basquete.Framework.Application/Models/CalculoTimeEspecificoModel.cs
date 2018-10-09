using FURB.Basquete.Framework.Domain.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Application.Models
{
    public class CalculoTimeEspecificoModel
    {
        public int AnoInicio { get; set; }
        public int AnoFim { get; set; }
        public string Categoria { get; set; }
    }
}
