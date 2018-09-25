using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface IJogadorService : IServiceBase<Jogador>
    {
        Jogador BuscarPorNome(string nome);
        void AdicionarTemporadaJogadores(IList<TemporadaJogadorCommand> jogadores);
    }
}
