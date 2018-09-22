using FURB.Basquete.Framework.Domain.CalculosModels;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Models;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class CalculoJogadorService : ICalculoJogadorService
    {
        private readonly ITemporadaJogadorService _temporadaJogadorService;
        private readonly IJogadorService _jogadorService;
        private const int MEDIA3ANOS = 3;

        public CalculoJogadorService(ITemporadaJogadorService temporadaTimeService, IJogadorService jogadorService)
        {
            _temporadaJogadorService = temporadaTimeService;
            _jogadorService = jogadorService;
        }

        public IList<CalculoJogadorResponse> CalcularJogador(CalculoJogadorCommand calculoJogador)
        {
            var jogadorResult = new List<CalculoJogadorResponse>();

            //ToDo - Ajustar para filtrar jogadores com poucos minutos - Jogadores relevantes para os calculos

            //TUDO
            var temporadaJogador = _temporadaJogadorService.GetAll().ToList();

            //Ano
            temporadaJogador = temporadaJogador.Where(x => x.Ano >= calculoJogador.AnoInicio && x.Ano <= calculoJogador.AnoFim).ToList();

            //Posicao
            temporadaJogador = temporadaJogador.Select(x => new TemporadaJogador
            {
                Ano = x.Ano,
                Id = x.Id,
                Jogadores = x.Jogadores.Where(y => y.Jogador_Posicao == calculoJogador.Posicao.ToString()).ToList()
            }).ToList();

            //Media Anual
            if (calculoJogador.TipoCalculo == TipoCalculo.MediaAnual)
            {
                //Criterio e Posicao
                var temporadaCalculo = new List<TemporadaBaseCalculo>();
                if (calculoJogador.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                {
                    temporadaCalculo = ObterEstatisticaJogador(calculoJogador.Categoria.Value, temporadaJogador).ToList();
                }
                else if (calculoJogador.Criterio == TipoCriterio.EstatisticaAvancada)
                {
                    temporadaCalculo = ObterEstatisticaAvancadaJogador(calculoJogador.CategoriaAvancada.Value, temporadaJogador).ToList();
                }

                //Retorno                
                foreach (var temporadas in temporadaJogador)
                {
                    foreach (var item in temporadas.Jogadores)
                    {
                        var jogadorTemp = _jogadorService.GetAll().FirstOrDefault(x => x.Id == item.Jogador_ID);
                        var tt = new CalculoJogadorResponse();

                        tt.AnoTemporada = temporadas.Ano;
                        tt.Nome = jogadorTemp.Nome;
                        tt.Posicao = (TipoPosicao)System.Enum.Parse(typeof(TipoPosicao), jogadorTemp.Posicao);
                        tt.ParametroCalculo = temporadaCalculo.FirstOrDefault(x => x.Ano == temporadas.Ano).ValorEstatistica;
                        if (calculoJogador.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                            tt.ValorEstatistica = ObterValorEstatistica(calculoJogador.Categoria.Value, item.EstatsticaPer36);
                        else
                            tt.ValorEstatistica = ObterValorEstatisticaAvancada(calculoJogador.CategoriaAvancada.Value, item.EstatsticaAvancada);

                        jogadorResult.Add(tt);
                    }
                }
            }       

            var res = jogadorResult.OrderByDescending(x => x.IndiceCalulo).ToList();
            return res;
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
                        return estatsticaAvancada.PorcentagemArremessosEficientes.Value;
                    }
                case TipoCategoriaAvancada.PorcentagemAssistencias:
                    {
                        return estatsticaAvancada.PorcentagemAssistencias.Value;
                    }
                case TipoCategoriaAvancada.PorcentagemDesperdiciosBola:
                    {
                        return estatsticaAvancada.PorcentagemDesperdiciosBola.Value;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesDefensivos:
                    {
                        return estatsticaAvancada.PorcentagemRebotesDefensivos.Value;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesOfensivos:
                    {
                        return estatsticaAvancada.PorcentagemRebotesOfensivos.Value;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesTotal:
                    {
                        return estatsticaAvancada.PorcentagemRebotesTotal.Value;
                    }
                case TipoCategoriaAvancada.PorcentagemRoubosBola:
                    {
                        return estatsticaAvancada.PorcentagemRoubosBola.Value;
                    }
                case TipoCategoriaAvancada.PorcentagemTocos:
                    {
                        return estatsticaAvancada.PorcentagemTocos.Value;
                    }
                case TipoCategoriaAvancada.PorcentagemUsoJogador:
                    {
                        return estatsticaAvancada.PorcentagemUsoJogador.Value;
                    }
                case TipoCategoriaAvancada.TaxaTentativas3Pontos:
                    {
                        return estatsticaAvancada.TaxaTentativas3Pontos.Value;
                    }
                case TipoCategoriaAvancada.TaxaTentativasLancesLivres:
                    {
                        return estatsticaAvancada.TaxaTentativas3Pontos.Value;
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
                        return estatistica.Arremessos3Pontos.Value;
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
                        return estatistica.Porcentagem2Pontos.Value;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        return estatistica.Porcentagem3Pontos.Value;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        return estatistica.PorcentagemArremessos.Value;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        return estatistica.PorcentagemLancesLivres.Value;
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
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.ContribuicaoVitoria).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.ContribuicaoVitoriaDefensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.ContribuicaoVitoriaDefensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.ContribuicaoVitoriaOfensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.ContribuicaoVitoriaOfensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EficienciaJogador:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.EficienciaJogador).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoDefensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.EstimativaContribuicaoDefensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoOfensiva:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.EstimativaContribuicaoOfensiva).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.EstimativaContribuicaoTotal:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.EstimativaContribuicaoTotal).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemArremessosEficientes:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemArremessosEficientes.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemAssistencias:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemAssistencias.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemDesperdiciosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemDesperdiciosBola.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesDefensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemRebotesDefensivos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesOfensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemRebotesOfensivos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRebotesTotal:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemRebotesTotal.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemRoubosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemRoubosBola.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemTocos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemTocos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.PorcentagemUsoJogador:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.PorcentagemUsoJogador.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.TaxaTentativas3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.TaxaTentativas3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoriaAvancada.TaxaTentativasLancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaAvancada.TaxaTentativasLancesLivres.Value).Average(), 2)
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
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Arremessos3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Porcentagem2Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Porcentagem3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.PorcentagemArremessos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.PorcentagemLancesLivres.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaJogadorCalculo = temporadaJogador.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Jogadores.Select(y => y.EstatsticaPer36.TotalRebotes).Average(), 2)
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
