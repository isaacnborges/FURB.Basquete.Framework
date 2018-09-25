using System.Collections.Generic;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class JogadorService : ServiceBase<Jogador>, IJogadorService
    {
        private readonly IJogadorRepository _jogadorRepository;
        public JogadorService(IJogadorRepository jogadorRepository) : base(jogadorRepository)
        {
            _jogadorRepository = jogadorRepository;
        }

        public void AdicionarTemporadaJogadores(IList<TemporadaJogadorCommand> jogadores)
        {
            foreach (var j in jogadores)
            {
                if (BuscarPorNome(j.Nome) != null)
                {
                    continue;
                }

                var jogador = new Jogador();
                jogador.Nome = j.Nome;
                jogador.Posicao = j.Posicao;
                Add(jogador);
            }
        }

        public Jogador BuscarPorNome(string nome)
        {
            return _jogadorRepository.Find(x => x.Nome == nome);
        }
    }
}
