using System;
using System.Collections.Generic;
using System.Linq;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Models;
using FURB.Basquete.Framework.Domain.Response;

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

            //obter registro com o ano
            var anoBase = jogadores.FirstOrDefault().Ano;
            var existeTemporada = _temporadaJogadorRepository.GetAll().Any(x => x.Ano == anoBase);
            if (existeTemporada)
            {
                _temporadaJogadorRepository.Delete(x => x.Ano == anoBase);
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

        public TemporadaJogadorResponse ObterEstatisticaJogador(Guid idJogador)
        {
            var temporadaJogador = new TemporadaJogadorResponse();
            var jogador = _jogadorService.Find(x => x.Id == idJogador);
            var tempJogador = _temporadaJogadorRepository.GetAll().Where(x => x.Jogadores.Any(y => y.Jogador_ID == idJogador)).OrderBy(x => x.Ano).ToList();

            temporadaJogador.Jogador = jogador;
            var tempJogadorEstatistica = new List<EstatisticaJogadorResponse>();
            foreach (var temporada in tempJogador)
            {
                var jogadorEstatistica = new EstatisticaJogadorResponse
                {
                    EstatisticaPer36 = temporada.Jogadores.Where(x => x.Jogador_ID == idJogador)
                                                     .Select(x => x.EstatsticaPer36)
                                                     .Select(x => x.ToJogadorResponse(temporada.Ano, x))
                                                     .FirstOrDefault(),
                    EstatisticaAvancada = temporada.Jogadores.Where(x => x.Jogador_ID == idJogador)
                                                             .Select(x => x.EstatsticaAvancada)
                                                             .Select(x => x.ToResponse(temporada.Ano, x))
                                                             .FirstOrDefault()
                };

                tempJogadorEstatistica.Add(jogadorEstatistica);
            }
            temporadaJogador.Estatisticas = tempJogadorEstatistica;

            return temporadaJogador;
        }
    }
}
