using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Response
{
    public class CalculoTimeResponse : CalculoBaseResponse
    {
        public TipoConferencia Conferencia { get; set; }
    }
}
