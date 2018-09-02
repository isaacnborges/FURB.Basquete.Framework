using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
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
    }
}
