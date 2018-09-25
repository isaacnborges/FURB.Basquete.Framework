using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ITimeService : IServiceBase<Time>
    {
        Time BuscarPorNome(string nome);
        void AdicionarTimes(IList<TemporadaTimeCommand> times);
    }
}
