using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Response;
using System;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Interfaces
{
    public interface ITemporadaJogadorAppService : IAppServiceBase<TemporadaJogador>
    {
        void AdicionarTemporadaJogador(IList<TemporadaJogadorCommand> jogadores);
        TemporadaJogadorResponse ObterEstatisticaJogador(Guid idJogador);
    }
}
