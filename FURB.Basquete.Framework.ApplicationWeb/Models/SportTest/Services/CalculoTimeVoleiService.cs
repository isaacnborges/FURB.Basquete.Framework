using FURB.Basquete.Framework.ApplicationWeb.Models.SportTest.Base;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Response;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using FURB.Basquete.Framework.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.ApplicationWeb.Models.SportTest.Services
{
    public class CalculoTimeVoleiService : ICalculoTimeService
    {
        public IList<CalculoTimeResponse> CalcularTime(CalculoTimeCommand calculoTime)
        {
            throw new NotImplementedException();
        }

        public IList<CalculoTimeAnoCategoria> CalcularTimeAnoCategoria(int anoInicio, int anoFim, Time time, TipoCategoria categoria)
        {
            throw new NotImplementedException();
        }
    }
}
