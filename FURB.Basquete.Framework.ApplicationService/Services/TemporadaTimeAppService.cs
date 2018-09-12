using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Response;
using System;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class TemporadaTimeAppService : AppServiceBase<TemporadaTime>, ITemporadaTimeAppService
    {
        private readonly ITemporadaTimeService _temporadaTimeService;

        public TemporadaTimeAppService(ITemporadaTimeService temporadaTimeService)
            : base(temporadaTimeService)
        {
            _temporadaTimeService = temporadaTimeService;
        }

        public void AdicionarTemporadaTimes(IList<TemporadaTimeCommand> times)
        {
            _temporadaTimeService.AdicionarTemporadaTimes(times);
        }

        public TemporadaTimeResponse ObterEstatisticaTime(Guid idTime)
        {
            return _temporadaTimeService.ObterEstatisticaTime(idTime);
        }
    }
}
