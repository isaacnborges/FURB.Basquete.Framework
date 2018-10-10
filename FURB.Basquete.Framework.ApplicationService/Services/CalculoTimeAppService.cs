using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Response;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class CalculoTimeAppService : ICalculoTimeAppService
    {
        private readonly ICalculoTimeService _calculoTimeService;

        public CalculoTimeAppService(ICalculoTimeService calculoTimeService)
        {
            _calculoTimeService = calculoTimeService;
        }

        public IList<CalculoTimeResponse> CalcularTime(CalculoTimeCommand calculoTime)
        {
            return _calculoTimeService.CalcularTime(calculoTime);
        }

        public IList<CalculoTimeAnoCategoria> CalcularTimeAnoCategoria(int anoInicio, int anoFim, Time time, TipoCategoria categoria)
        {
            return _calculoTimeService.CalcularTimeAnoCategoria(anoInicio, anoFim, time, categoria);
        }
    }
}
