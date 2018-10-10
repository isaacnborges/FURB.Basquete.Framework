using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Response;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ICalculoTimeService
    {
        IList<CalculoTimeResponse> CalcularTime(CalculoTimeCommand calculoTime);
        IList<CalculoTimeAnoCategoria> CalcularTimeAnoCategoria(int anoInicio, int anoFim, Time time, TipoCategoria categoria);
    }
}
