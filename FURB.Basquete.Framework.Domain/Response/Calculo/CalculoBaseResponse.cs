using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Response.Calculo
{
    public class CalculoBaseResponse
    {
        public int AnoTemporada { get; set; }
        public string Nome { get; set; }
        public double ParametroCalculo { get; set; }
        public double ValorEstatistica { get; set; }
        public double IndiceCalulo
        {
            get
            {
                return Math.Round(ValorEstatistica - ParametroCalculo, 2);
            }
        }
    }
}
