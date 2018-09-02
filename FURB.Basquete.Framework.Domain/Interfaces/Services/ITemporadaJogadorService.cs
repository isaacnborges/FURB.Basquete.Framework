using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ITemporadaJogadorService : IServiceBase<TemporadaJogador>
    {
        void AdicionarTemporadaJogadores(IList<TemporadaJogadorCommand> jogadores);
    }
}
