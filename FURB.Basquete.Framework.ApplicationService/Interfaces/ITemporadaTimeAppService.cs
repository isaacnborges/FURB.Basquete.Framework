using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Response;
using System;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Interfaces
{
    public interface ITemporadaTimeAppService : IAppServiceBase<TemporadaTime>
    {
        void AdicionarTemporadaTimes(IList<TemporadaTimeCommand> times);
        TemporadaTimeResponse ObterEstatisticaTime(Guid idTime);
    }
}
