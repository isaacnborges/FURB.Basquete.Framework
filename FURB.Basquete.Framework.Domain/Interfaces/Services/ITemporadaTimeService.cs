using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ITemporadaTimeService : IServiceBase<TemporadaTime>
    {
        void AdicionarTemporadaTimes(IList<TemporadaTimeCommand> times);
    }
}
