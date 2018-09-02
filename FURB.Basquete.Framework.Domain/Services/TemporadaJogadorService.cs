using System.Collections.Generic;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Models;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class TemporadaJogadorService : ServiceBase<TemporadaJogador>, ITemporadaJogadorService
    {
        private readonly ITemporadaJogadorRepository _temporadaJogadorRepository;
        private readonly IJogadorService _jogadorService;

        public TemporadaJogadorService(ITemporadaJogadorRepository temporadaJogadorRepository,
                                       IJogadorService jogadorService) 
            : base(temporadaJogadorRepository)
        {
            _temporadaJogadorRepository = temporadaJogadorRepository;
            _jogadorService = jogadorService;
        }

        public void AdicionarTemporadaJogadores(IList<TemporadaJogadorCommand> jogadores)
        {
            //Adicionar Jogador
            foreach (var j in jogadores)
            {
                if (_jogadorService.BuscarPorNome(j.Nome) != null)
                {
                    continue;
                }

                var jogador = new Jogador();
                jogador.Nome = j.Nome;
                jogador.Posicao = j.Posicao;
                _jogadorService.Add(jogador);
            }

            var temporadaJogador = new TemporadaJogador();
            var jogadoresTemporada = new List<JogadorEstatistica>();
            //Adicionar Temporada Time
            foreach (var j in jogadores)
            {
                var jogadorAdicionado = _jogadorService.BuscarPorNome(j.Nome);
                var jogadorEstatistica = new JogadorEstatistica();

                jogadorEstatistica.Jogador_ID = jogadorAdicionado.Id;
                jogadorEstatistica.EstatsticaPer36 = j.EstatisticaPer36;
                jogadorEstatistica.EstatsticaAvancada = j.EstatsticaAvancada;

                temporadaJogador.Ano = j.Ano;
                jogadoresTemporada.Add(jogadorEstatistica);
            }

            temporadaJogador.Jogadores = jogadoresTemporada;
            Add(temporadaJogador);
        }
    }
}
