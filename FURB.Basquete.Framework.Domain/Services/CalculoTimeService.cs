using FURB.Basquete.Framework.Domain.CalculosModels;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class CalculoTimeService : ICalculoTimeService
    {
        private readonly ITemporadaTimeService _temporadaTimeService;

        public CalculoTimeService(ITemporadaTimeService temporadaTimeService)
        {
            _temporadaTimeService = temporadaTimeService;
        }

        public void CalcularTime(CalculoTimeCommand calculoTime)
        {
            //TUDO
            var times = _temporadaTimeService.GetAll().ToList();

            if (calculoTime.TipoCalculo == TipoCalculo.MediaAnual)
            {
                //Ano
                times = times.Where(x => x.Ano >= calculoTime.AnoInicio && x.Ano <= calculoTime.AnoFim).ToList();

                //Criterio e Categoria
                var temporadaCalculo = new List<TemporadaTimeCalculo>();
                if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                {
                    temporadaCalculo = ObterEstatisticaTime(calculoTime.Categoria, times).ToList();
                }
                else if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Oponente)
                {
                    temporadaCalculo = ObterEstatisticaOponenteTime(calculoTime.Categoria, times).ToList();
                }

                //Conferencia
            }
        }

        private IList<TemporadaTimeCalculo> ObterEstatisticaTime(TipoCategoria tipoCategoria, IList<TemporadaTime> temporadaTime)
        {
            var temporadaTimeCalculo = new List<TemporadaTimeCalculo>();

            switch (tipoCategoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Porcentagem2Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Porcentagem3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.PorcentagemArremessos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.PorcentagemLancesLivres.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.TotalRebotes).Average(), 2)
                        }).ToList();
                        break;
                    }
                default:
                    return null;
            }

            return temporadaTimeCalculo;
        }

        private IList<TemporadaTimeCalculo> ObterEstatisticaOponenteTime(TipoCategoria tipoCategoria, IList<TemporadaTime> temporadaTime)
        {
            var temporadaTimeCalculo = new List<TemporadaTimeCalculo>();

            switch (tipoCategoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Porcentagem2Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Porcentagem3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.PorcentagemArremessos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.PorcentagemLancesLivres.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaTimeCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.TotalRebotes).Average(), 2)
                        }).ToList();
                        break;
                    }
                default:
                    return null;
            }

            return temporadaTimeCalculo;
        }
    }
}
