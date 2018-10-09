using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Response;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Interfaces
{
    public interface ICalculoTimeAppService
    {
        IList<CalculoTimeResponse> CalcularTime(CalculoTimeCommand calculoTime);
        IList<CalculoTimeAnoCategoria> CalcularTimeAnoCategoria(int anoInicio, int anoFim, TipoCategoria categoria);
    }
}
