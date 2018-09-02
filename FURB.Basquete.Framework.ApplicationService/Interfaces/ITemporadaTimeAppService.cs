using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Interfaces
{
    public interface ITemporadaTimeAppService : IAppServiceBase<TemporadaTime>
    {
        void AdicionarTemporadaTimes(IList<TemporadaTimeCommand> times);
    }
}
