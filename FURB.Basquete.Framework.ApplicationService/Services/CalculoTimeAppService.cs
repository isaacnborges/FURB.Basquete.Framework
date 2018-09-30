using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class CalculoTimeAppService : ICalculoTimeAppService
    {
        private readonly ICalculoTimeService _calculoTimeService;

        public CalculoTimeAppService(ICalculoTimeService calculoTimeService)
        {
            this._calculoTimeService = calculoTimeService;
        }

        public IList<CalculoTimeResponse> CalcularTime(CalculoTimeCommand calculoTime)
        {
            return _calculoTimeService.CalcularTime(calculoTime);
        }
    }
}
