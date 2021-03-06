﻿using FURB.Basquete.Framework.Domain.CalculosModels;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Models;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class CalculoJogadorService : CalculoJogadorBase, ICalculoJogadorService
    {
        private readonly ITemporadaJogadorService _temporadaJogadorService;
        private readonly IJogadorService _jogadorService;

        public CalculoJogadorService(ITemporadaJogadorService temporadaTimeService, IJogadorService jogadorService)
        {
            _temporadaJogadorService = temporadaTimeService;
            _jogadorService = jogadorService;
        }

        public CalculoJogadorEspecificoResponse CalcularJogadorEspecifico(Jogador jogador, int anoBase, TipoCriterio tipoCriterio, bool filtrarJogadores, int? qtdJogos)
        {
            var jogadorResult = new CalculoJogadorEspecificoResponse();

            var temporada = _temporadaJogadorService.GetAll().Where(x => x.Ano == anoBase).ToList();

            if (filtrarJogadores && qtdJogos != null && qtdJogos > 0)
            {
                temporada = temporada.Select(x => new TemporadaJogador
                {
                    Ano = x.Ano,
                    Jogadores = x.Jogadores.Where(y => y.EstatisticaPer36.Jogos >= qtdJogos).ToList()
                }).ToList();
            }

            var temporadaJogador = temporada.Select(x => new TemporadaJogador
            {
                Ano = x.Ano,
                Id = x.Id,
                Jogadores = x.Jogadores.Where(y => y.Jogador_ID == jogador.Id).ToList()
            }).FirstOrDefault();

            jogadorResult.AnoTemporada = temporadaJogador.Ano;
            jogadorResult.Nome = jogador.Nome;
            jogadorResult.Posicao = jogador.Posicao;

            var estatistica = temporadaJogador.Jogadores.FirstOrDefault();
            if (tipoCriterio == TipoCriterio.EstatisticaPer36Minutes)
            {
                var estatisticaPer36Jogador = new EstatisticaPer36Jogador();
                var estatisticaPer36Media = new EstatisticaPer36Jogador();

                MontarEstatisticaJogador(estatistica, estatisticaPer36Jogador);
                MontarEstatisticaMedia(temporada, estatisticaPer36Media);

                jogadorResult.EstatisticaPer36Jogador = estatisticaPer36Jogador;
                jogadorResult.EstatisticaPer36Media = estatisticaPer36Media;
            }
            else
            {
                var estatisticaAvancadaJogador = new EstatisticaAvancada();
                var estatisticaAvancadaMedia = new EstatisticaAvancada();

                MontarEstatisticaAvancadaJogador(estatistica, estatisticaAvancadaJogador);
                MontarEstatisticaAvancadaMedia(temporada, estatisticaAvancadaMedia);

                jogadorResult.EstatisticaAvancadaJogador = estatisticaAvancadaJogador;
                jogadorResult.EstatisticaAvancadaMedia = estatisticaAvancadaMedia;
            }

            return jogadorResult;
        }

        private static void MontarEstatisticaAvancadaMedia(List<TemporadaJogador> temporada, EstatisticaAvancada estatisticaAvancadaMedia)
        {
            estatisticaAvancadaMedia.ContribuicaoVitoria = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoria).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.ContribuicaoVitoriaDefensiva = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoriaDefensiva).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.ContribuicaoVitoriaOfensiva = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoriaOfensiva).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.EficienciaJogador = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.EficienciaJogador).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.EstimativaContribuicaoDefensiva = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoDefensiva).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.EstimativaContribuicaoOfensiva = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoOfensiva).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.EstimativaContribuicaoTotal = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoTotal).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemArremessosEficientes = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemArremessosEficientes).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemAssistencias = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemAssistencias).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemDesperdiciosBola = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemDesperdiciosBola).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemRebotesDefensivos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesDefensivos).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemRebotesOfensivos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesOfensivos).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemRebotesTotal = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesTotal).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemRoubosBola = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRoubosBola).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemTocos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemTocos).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.PorcentagemUsoJogador = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemUsoJogador).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.TaxaTentativas3Pontos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.TaxaTentativas3Pontos).Average()).FirstOrDefault(), 2);
            estatisticaAvancadaMedia.TaxaTentativasLancesLivres = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaAvancada.TaxaTentativasLancesLivres).Average()).FirstOrDefault(), 2);
        }

        private static void MontarEstatisticaAvancadaJogador(JogadorEstatistica estatistica, EstatisticaAvancada estatisticaAvancadaJogador)
        {
            estatisticaAvancadaJogador.ContribuicaoVitoria = estatistica.EstatisticaAvancada.ContribuicaoVitoria;
            estatisticaAvancadaJogador.ContribuicaoVitoriaDefensiva = estatistica.EstatisticaAvancada.ContribuicaoVitoriaDefensiva;
            estatisticaAvancadaJogador.ContribuicaoVitoriaOfensiva = estatistica.EstatisticaAvancada.ContribuicaoVitoriaOfensiva;
            estatisticaAvancadaJogador.EficienciaJogador = estatistica.EstatisticaAvancada.EficienciaJogador;
            estatisticaAvancadaJogador.EstimativaContribuicaoDefensiva = estatistica.EstatisticaAvancada.EstimativaContribuicaoDefensiva;
            estatisticaAvancadaJogador.EstimativaContribuicaoOfensiva = estatistica.EstatisticaAvancada.EstimativaContribuicaoOfensiva;
            estatisticaAvancadaJogador.EstimativaContribuicaoTotal = estatistica.EstatisticaAvancada.EstimativaContribuicaoTotal;
            estatisticaAvancadaJogador.PorcentagemArremessosEficientes = estatistica.EstatisticaAvancada.PorcentagemArremessosEficientes;
            estatisticaAvancadaJogador.PorcentagemAssistencias = estatistica.EstatisticaAvancada.PorcentagemAssistencias;
            estatisticaAvancadaJogador.PorcentagemDesperdiciosBola = estatistica.EstatisticaAvancada.PorcentagemDesperdiciosBola;
            estatisticaAvancadaJogador.PorcentagemRebotesDefensivos = estatistica.EstatisticaAvancada.PorcentagemRebotesDefensivos;
            estatisticaAvancadaJogador.PorcentagemRebotesOfensivos = estatistica.EstatisticaAvancada.PorcentagemRebotesOfensivos;
            estatisticaAvancadaJogador.PorcentagemRebotesTotal = estatistica.EstatisticaAvancada.PorcentagemRebotesTotal;
            estatisticaAvancadaJogador.PorcentagemRoubosBola = estatistica.EstatisticaAvancada.PorcentagemRoubosBola;
            estatisticaAvancadaJogador.PorcentagemTocos = estatistica.EstatisticaAvancada.PorcentagemTocos;
            estatisticaAvancadaJogador.PorcentagemUsoJogador = estatistica.EstatisticaAvancada.PorcentagemUsoJogador;
            estatisticaAvancadaJogador.TaxaTentativas3Pontos = estatistica.EstatisticaAvancada.TaxaTentativas3Pontos;
            estatisticaAvancadaJogador.TaxaTentativasLancesLivres = estatistica.EstatisticaAvancada.TaxaTentativasLancesLivres;
        }

        private static void MontarEstatisticaMedia(List<TemporadaJogador> temporada, EstatisticaPer36Jogador estatisticaPer36Media)
        {
            estatisticaPer36Media.Arremessos2Pontos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos2Pontos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Arremessos2PontosTentados = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos2PontosTentados).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Arremessos3Pontos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos3Pontos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Arremessos3PontosTentados = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos3PontosTentados).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.ArremessosConvertidos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.ArremessosConvertidos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.ArremessosTentados = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.ArremessosTentados).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Assistencias = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Assistencias).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.DesperdiciosBola = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.DesperdiciosBola).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Faltas = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Faltas).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.LancesLivres = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.LancesLivres).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Pontos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Pontos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Porcentagem2Pontos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Porcentagem2Pontos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Porcentagem3Pontos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Porcentagem3Pontos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.PorcentagemArremessos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.PorcentagemArremessos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.PorcentagemLancesLivres = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.PorcentagemLancesLivres).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.RebotesDefensivos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.RebotesDefensivos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.RebotesOfensivos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.RebotesOfensivos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.RoubosBola = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.RoubosBola).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.Tocos = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.Tocos).Average()).FirstOrDefault(), 2);
            estatisticaPer36Media.TotalRebotes = Math.Round(temporada.Select(x => x.Jogadores.Select(y => y.EstatisticaPer36.TotalRebotes).Average()).FirstOrDefault(), 2);
        }

        private static void MontarEstatisticaJogador(JogadorEstatistica estatistica, EstatisticaPer36Jogador estatisticaPer36Jogador)
        {
            estatisticaPer36Jogador.Arremessos2Pontos = estatistica.EstatisticaPer36.Arremessos2Pontos;
            estatisticaPer36Jogador.Arremessos2PontosTentados = estatistica.EstatisticaPer36.Arremessos2PontosTentados;
            estatisticaPer36Jogador.Arremessos3Pontos = estatistica.EstatisticaPer36.Arremessos3Pontos;
            estatisticaPer36Jogador.Arremessos3PontosTentados = estatistica.EstatisticaPer36.Arremessos3PontosTentados;
            estatisticaPer36Jogador.ArremessosConvertidos = estatistica.EstatisticaPer36.ArremessosConvertidos;
            estatisticaPer36Jogador.ArremessosTentados = estatistica.EstatisticaPer36.ArremessosTentados;
            estatisticaPer36Jogador.Assistencias = estatistica.EstatisticaPer36.Assistencias;
            estatisticaPer36Jogador.DesperdiciosBola = estatistica.EstatisticaPer36.DesperdiciosBola;
            estatisticaPer36Jogador.Faltas = estatistica.EstatisticaPer36.Faltas;
            estatisticaPer36Jogador.LancesLivres = estatistica.EstatisticaPer36.LancesLivres;
            estatisticaPer36Jogador.Pontos = estatistica.EstatisticaPer36.Pontos;
            estatisticaPer36Jogador.Porcentagem2Pontos = estatistica.EstatisticaPer36.Porcentagem2Pontos;
            estatisticaPer36Jogador.Porcentagem3Pontos = estatistica.EstatisticaPer36.Porcentagem3Pontos;
            estatisticaPer36Jogador.PorcentagemArremessos = estatistica.EstatisticaPer36.PorcentagemArremessos;
            estatisticaPer36Jogador.PorcentagemLancesLivres = estatistica.EstatisticaPer36.PorcentagemLancesLivres;
            estatisticaPer36Jogador.RebotesDefensivos = estatistica.EstatisticaPer36.RebotesDefensivos;
            estatisticaPer36Jogador.RebotesOfensivos = estatistica.EstatisticaPer36.RebotesOfensivos;
            estatisticaPer36Jogador.RoubosBola = estatistica.EstatisticaPer36.RoubosBola;
            estatisticaPer36Jogador.Tocos = estatistica.EstatisticaPer36.Tocos;
            estatisticaPer36Jogador.TotalRebotes = estatistica.EstatisticaPer36.TotalRebotes;
        }

        public IList<CalculoJogadorResponse> CalcularJogador(CalculoJogadorCommand calculoJogador, bool filtrarJogadores, int? qtdJogos)
        {
            var jogadorResult = new List<CalculoJogadorResponse>();           
            var temporadaJogador = _temporadaJogadorService.GetAll().Where(x => x.Ano >= calculoJogador.AnoInicio && x.Ano <= calculoJogador.AnoFim).ToList();

            if (filtrarJogadores && qtdJogos != null && qtdJogos > 0)
            {                
                temporadaJogador = temporadaJogador.Select(x => new TemporadaJogador
                {
                    Ano = x.Ano,
                    Jogadores = x.Jogadores.Where(y => y.EstatisticaPer36.Jogos >= qtdJogos).ToList()
                }).ToList();
            }

            temporadaJogador = temporadaJogador.Select(x => new TemporadaJogador
            {
                Ano = x.Ano,
                Id = x.Id,
                Jogadores = x.Jogadores.Where(y => y.Jogador_Posicao == calculoJogador.Posicao.ToString()).ToList()
            }).ToList();

            if (calculoJogador.TipoCalculo == TipoCalculo.MediaAnual)
            {
                var temporadaCalculo = new List<TemporadaBaseCalculo>();
                if (calculoJogador.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                {
                    temporadaCalculo = ObterEstatisticaJogador(calculoJogador.Categoria.Value, temporadaJogador).ToList();
                }
                else if (calculoJogador.Criterio == TipoCriterio.EstatisticaAvancada)
                {
                    temporadaCalculo = ObterEstatisticaAvancadaJogador(calculoJogador.CategoriaAvancada.Value, temporadaJogador).ToList();
                }

                MontarRetorno(calculoJogador, jogadorResult, temporadaJogador, temporadaCalculo, null);
            }            
            else if (calculoJogador.TipoCalculo == TipoCalculo.Media3Anos)
            {
                if (calculoJogador.AnoFim - calculoJogador.AnoInicio >= MEDIA3ANOS)
                {
                    throw new Exception("Período informado não possui um intervalo de 3 anos");
                }

                //Criterio e Categoria
                double valorEstatistica = 0;
                if (calculoJogador.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                {
                    valorEstatistica = ObterEstatisticaJogador3Anos(calculoJogador, temporadaJogador);
                }
                else if (calculoJogador.Criterio == TipoCriterio.EstatisticaAvancada)
                {
                    valorEstatistica = ObterEstatisticaAvancadaJogador3Anos(calculoJogador, temporadaJogador);
                }

                MontarRetorno(calculoJogador, jogadorResult, temporadaJogador, null, valorEstatistica);
            }

            var res = jogadorResult.OrderByDescending(x => x.IndiceCalulo).ToList();
            return res;
        }

        private void MontarRetorno(CalculoJogadorCommand calculoJogador, List<CalculoJogadorResponse> jogadorResult, List<TemporadaJogador> temporadaJogador, List<TemporadaBaseCalculo> temporadaCalculo, double? valorEstatistica)
        {
            foreach (var temporadas in temporadaJogador)
            {
                foreach (var item in temporadas.Jogadores)
                {
                    var jogadorTemp = _jogadorService.GetAll().FirstOrDefault(x => x.Id == item.Jogador_ID);
                    var tt = new CalculoJogadorResponse();

                    tt.AnoTemporada = temporadas.Ano;
                    tt.Nome = jogadorTemp.Nome;
                    tt.Posicao = (TipoPosicao)System.Enum.Parse(typeof(TipoPosicao), jogadorTemp.Posicao);
                    tt.ParametroCalculo = valorEstatistica == null ? temporadaCalculo.FirstOrDefault(x => x.Ano == temporadas.Ano).ValorEstatistica : valorEstatistica.Value;
                    if (calculoJogador.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                        tt.ValorEstatistica = ObterValorEstatistica(calculoJogador.Categoria.Value, item.EstatisticaPer36);
                    else
                        tt.ValorEstatistica = ObterValorEstatisticaAvancada(calculoJogador.CategoriaAvancada.Value, item.EstatisticaAvancada);

                    jogadorResult.Add(tt);
                }
            }
        }

        private double ObterEstatisticaAvancadaJogador3Anos(CalculoJogadorCommand calculoJogador, List<TemporadaJogador> temporadaJogador)
        {
            var temporadaJogadorCalculo = new List<TemporadaBaseCalculo>();
            double valorEstatistica = 0;

            switch (calculoJogador.CategoriaAvancada)
            {
                case TipoCategoriaAvancada.ContribuicaoVitoria:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoria).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.ContribuicaoVitoriaDefensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoriaDefensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.ContribuicaoVitoriaOfensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoriaOfensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EficienciaJogador:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.EficienciaJogador).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoDefensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoDefensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoOfensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoOfensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoTotal:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoTotal).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemArremessosEficientes:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemArremessosEficientes).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemAssistencias:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemAssistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemDesperdiciosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemDesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesDefensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesOfensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesTotal:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesTotal).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRoubosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemTocos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemTocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemUsoJogador:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemUsoJogador).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.TaxaTentativas3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.TaxaTentativas3Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.TaxaTentativasLancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.TaxaTentativasLancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                default:
                    return 0;
            }

            valorEstatistica = Math.Round(temporadaJogadorCalculo.Select(x => x.ValorEstatistica).Average());

            return valorEstatistica;
        }

        private double ObterEstatisticaJogador3Anos(CalculoJogadorCommand calculoJogador, List<TemporadaJogador> temporadaJogador)
        {
            var temporadaJogadorCalculo = new List<TemporadaBaseCalculo>();
            double valorEstatistica = 0;

            switch (calculoJogador.Categoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos3Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Pontos).Average(), 2)
                        }).ToList();

                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Porcentagem2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Porcentagem3Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.PorcentagemArremessos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.PorcentagemLancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.TotalRebotes).Average(), 2)
                        }).ToList();
                        break;
                    }
                default:
                    return 0;
            }

            valorEstatistica = Math.Round(temporadaJogadorCalculo.Select(x => x.ValorEstatistica).Average());

            return valorEstatistica;
        }

        private double ObterValorEstatisticaAvancada(TipoCategoriaAvancada tipoCategoriaAvancada, EstatisticaAvancada estatsticaAvancada)
        {
            switch (tipoCategoriaAvancada)
            {
                case TipoCategoriaAvancada.ContribuicaoVitoria:
                    {
                        return estatsticaAvancada.ContribuicaoVitoria;
                    }
                case TipoCategoriaAvancada.ContribuicaoVitoriaDefensiva:
                    {
                        return estatsticaAvancada.ContribuicaoVitoriaDefensiva;
                    }
                case TipoCategoriaAvancada.ContribuicaoVitoriaOfensiva:
                    {
                        return estatsticaAvancada.ContribuicaoVitoriaOfensiva;
                    }
                case TipoCategoriaAvancada.EficienciaJogador:
                    {
                        return estatsticaAvancada.EficienciaJogador;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoDefensiva:
                    {
                        return estatsticaAvancada.EstimativaContribuicaoDefensiva;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoOfensiva:
                    {
                        return estatsticaAvancada.EstimativaContribuicaoOfensiva;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoTotal:
                    {
                        return estatsticaAvancada.EstimativaContribuicaoTotal;
                    }
                case TipoCategoriaAvancada.PorcentagemArremessosEficientes:
                    {
                        return estatsticaAvancada.PorcentagemArremessosEficientes;
                    }
                case TipoCategoriaAvancada.PorcentagemAssistencias:
                    {
                        return estatsticaAvancada.PorcentagemAssistencias;
                    }
                case TipoCategoriaAvancada.PorcentagemDesperdiciosBola:
                    {
                        return estatsticaAvancada.PorcentagemDesperdiciosBola;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesDefensivos:
                    {
                        return estatsticaAvancada.PorcentagemRebotesDefensivos;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesOfensivos:
                    {
                        return estatsticaAvancada.PorcentagemRebotesOfensivos;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesTotal:
                    {
                        return estatsticaAvancada.PorcentagemRebotesTotal;
                    }
                case TipoCategoriaAvancada.PorcentagemRoubosBola:
                    {
                        return estatsticaAvancada.PorcentagemRoubosBola;
                    }
                case TipoCategoriaAvancada.PorcentagemTocos:
                    {
                        return estatsticaAvancada.PorcentagemTocos;
                    }
                case TipoCategoriaAvancada.PorcentagemUsoJogador:
                    {
                        return estatsticaAvancada.PorcentagemUsoJogador;
                    }
                case TipoCategoriaAvancada.TaxaTentativas3Pontos:
                    {
                        return estatsticaAvancada.TaxaTentativas3Pontos;
                    }
                case TipoCategoriaAvancada.TaxaTentativasLancesLivres:
                    {
                        return estatsticaAvancada.TaxaTentativas3Pontos;
                    }
                default:
                    return 0;
            }
        }

        private double ObterValorEstatistica(TipoCategoria tipoCategoria, EstatisticaPer36 estatistica)
        {
            switch (tipoCategoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        return estatistica.Arremessos2Pontos;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        return estatistica.Arremessos2PontosTentados;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        return estatistica.Arremessos3Pontos;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        return estatistica.Arremessos3PontosTentados;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        return estatistica.ArremessosConvertidos;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        return estatistica.ArremessosTentados;
                    }
                case TipoCategoria.Assistencias:
                    {
                        return estatistica.Assistencias;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        return estatistica.DesperdiciosBola;
                    }
                case TipoCategoria.Faltas:
                    {
                        return estatistica.Faltas;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        return estatistica.LancesLivres;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        return estatistica.LancesLivresTentados;
                    }
                case TipoCategoria.Pontos:
                    {
                        return estatistica.Pontos;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        return estatistica.Porcentagem2Pontos;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        return estatistica.Porcentagem3Pontos;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        return estatistica.PorcentagemArremessos;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        return estatistica.PorcentagemLancesLivres;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        return estatistica.RebotesDefensivos;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        return estatistica.RebotesOfensivos;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        return estatistica.RoubosBola;
                    }
                case TipoCategoria.Tocos:
                    {
                        return estatistica.Tocos;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        return estatistica.TotalRebotes;
                    }
                default:
                    return 0;
            }
        }

        private IList<TemporadaBaseCalculo> ObterEstatisticaAvancadaJogador(TipoCategoriaAvancada tipoCategoria, List<TemporadaJogador> temporadaJogador)
        {
            var temporadaJogadorCalculo = new List<TemporadaBaseCalculo>();

            switch (tipoCategoria)
            {
                case TipoCategoriaAvancada.ContribuicaoVitoria:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoria).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.ContribuicaoVitoriaDefensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoriaDefensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.ContribuicaoVitoriaOfensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.ContribuicaoVitoriaOfensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EficienciaJogador:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.EficienciaJogador).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoDefensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoDefensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoOfensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoOfensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoTotal:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.EstimativaContribuicaoTotal).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemArremessosEficientes:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemArremessosEficientes).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemAssistencias:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemAssistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemDesperdiciosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemDesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesDefensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesOfensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesTotal:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRebotesTotal).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRoubosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemRoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemTocos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemTocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemUsoJogador:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.PorcentagemUsoJogador).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.TaxaTentativas3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.TaxaTentativas3Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.TaxaTentativasLancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaAvancada.TaxaTentativasLancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                default:
                    return null;
            }

            return temporadaJogadorCalculo;
        }

        private IList<TemporadaBaseCalculo> ObterEstatisticaJogador(TipoCategoria tipoCategoria, List<TemporadaJogador> temporadaJogador)
        {
            var temporadaJogadorCalculo = new List<TemporadaBaseCalculo>();

            switch (tipoCategoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos3Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Porcentagem2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Porcentagem3Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.PorcentagemArremessos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.PorcentagemLancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatisticaPer36.TotalRebotes).Average(), 2)
                        }).ToList();
                        break;
                    }
                default:
                    return null;
            }

            return temporadaJogadorCalculo;
        }
    }
}
