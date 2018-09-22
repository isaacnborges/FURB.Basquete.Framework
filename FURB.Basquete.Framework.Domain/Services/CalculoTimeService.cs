using FURB.Basquete.Framework.Domain.CalculosModels;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Models;
using FURB.Basquete.Framework.Domain.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class CalculoTimeService : ICalculoTimeService
    {
        private readonly ITemporadaTimeService _temporadaTimeService;
        private readonly ITimeService _timeService;
        private const int MEDIA3ANOS = 3;

        public CalculoTimeService(ITemporadaTimeService temporadaTimeService, ITimeService timeService)
        {
            _temporadaTimeService = temporadaTimeService;
            _timeService = timeService;
        }

        public IList<CalculoTimeResponse> CalcularTime(CalculoTimeCommand calculoTime)
        {
            var timesResult = new List<CalculoTimeResponse>();

            //TUDO
            var temporadaTimes = _temporadaTimeService.GetAll().ToList();

            //Ano
            temporadaTimes = temporadaTimes.Where(x => x.Ano >= calculoTime.AnoInicio && x.Ano <= calculoTime.AnoFim).ToList();

            //Conferencia
            if (calculoTime.Conferencia != TipoConferencia.Ambas)
            {
                temporadaTimes = temporadaTimes.Select(x => new TemporadaTime
                {
                    Ano = x.Ano,
                    Id = x.Id,
                    Times = x.Times.Where(y => y.Time_Conferencia == calculoTime.Conferencia.ToString()).ToList()
                }).ToList();
            }

            //Media Anual
            if (calculoTime.TipoCalculo == TipoCalculo.MediaAnual)
            {
                //Criterio e Categoria
                var temporadaCalculo = new List<TemporadaBaseCalculo>();
                if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                {
                    temporadaCalculo = ObterEstatisticaTime(calculoTime.Categoria.Value, temporadaTimes).ToList();
                }
                else if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Oponente)
                {
                    temporadaCalculo = ObterEstatisticaOponenteTime(calculoTime.Categoria.Value, temporadaTimes).ToList();
                }

                //Retorno                
                foreach (var temporadas in temporadaTimes)
                {
                    foreach (var item in temporadas.Times)
                    {
                        var timeTemp = _timeService.GetAll().FirstOrDefault(x => x.Id == item.Time_ID);
                        var tt = new CalculoTimeResponse();
                        tt.AnoTemporada = temporadas.Ano;
                        tt.Nome = timeTemp.Nome;
                        tt.Conferencia = (TipoConferencia)System.Enum.Parse(typeof(TipoConferencia), timeTemp.Conferencia);
                        tt.ParametroCalculo = temporadaCalculo.FirstOrDefault(x => x.Ano == temporadas.Ano).ValorEstatistica;                        
                        if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                            tt.ValorEstatistica = ObterValorEstatistica(calculoTime.Categoria.Value, item.EstatisticaTime);
                        else
                            tt.ValorEstatistica = ObterValorEstatistica(calculoTime.Categoria.Value, item.EstatisticaOponenteTime);

                        timesResult.Add(tt);
                    }
                }                
            }
            //Media 3 ANOS
            else if (calculoTime.TipoCalculo == TipoCalculo.Media3Anos)
            {
                if (calculoTime.AnoFim - calculoTime.AnoInicio >= MEDIA3ANOS)
                {
                    throw new Exception("Período informado não possui um intervalo de 3 anos");
                }

                //Criterio e Categoria
                double valorEstatistica = 0;
                if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                {
                    valorEstatistica = ObterEstatisticaTime3Anos(calculoTime, temporadaTimes);
                }
                else if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Oponente)
                {
                    valorEstatistica = ObterEstatisticaOponenteTime3Anos(calculoTime, temporadaTimes);
                }

                //Retorno               
                foreach (var temporadas in temporadaTimes)
                {
                    foreach (var item in temporadas.Times)
                    {
                        var timeTemp = _timeService.GetAll().FirstOrDefault(x => x.Id == item.Time_ID);
                        var tt = new CalculoTimeResponse();

                        tt.AnoTemporada = temporadas.Ano;
                        tt.Nome = timeTemp.Nome;
                        tt.Conferencia = (TipoConferencia)System.Enum.Parse(typeof(TipoConferencia), timeTemp.Conferencia);
                        tt.ParametroCalculo = valorEstatistica;
                        if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                            tt.ValorEstatistica = ObterValorEstatistica(calculoTime.Categoria.Value, item.EstatisticaTime);
                        else
                            tt.ValorEstatistica = ObterValorEstatistica(calculoTime.Categoria.Value, item.EstatisticaOponenteTime);

                        timesResult.Add(tt);
                    }
                }
            }

            var res = timesResult.OrderByDescending(x => x.IndiceCalulo).ToList();
            return res;
        }

        private double ObterEstatisticaTime3Anos(CalculoTimeCommand calculoTime, IList<TemporadaTime> temporadaTime)
        {
            var temporadaTimeCalculo = new List<TemporadaBaseCalculo>();
            double valorEstatistica = 0;

            switch (calculoTime.Categoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Pontos).Average(), 2)
                        }).ToList();

                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Porcentagem2Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Porcentagem3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.PorcentagemArremessos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.PorcentagemLancesLivres.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.TotalRebotes).Average(), 2)
                        }).ToList();
                        break;
                    }
                default:
                    return 0;
            }

            valorEstatistica = Math.Round(temporadaTimeCalculo.Select(x => x.ValorEstatistica).Average());

            return valorEstatistica;
        }

        private double ObterEstatisticaOponenteTime3Anos(CalculoTimeCommand calculoTime, IList<TemporadaTime> temporadaTime)
        {
            var temporadaTimeCalculo = new List<TemporadaBaseCalculo>();
            double valorEstatistica = 0;

            switch (calculoTime.Categoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Pontos).Average(), 2)
                        }).ToList();

                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Porcentagem2Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Porcentagem3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.PorcentagemArremessos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.PorcentagemLancesLivres.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.TotalRebotes).Average(), 2)
                        }).ToList();
                        break;
                    }
                default:
                    return 0;
            }

            valorEstatistica = Math.Round(temporadaTimeCalculo.Select(x => x.ValorEstatistica).Average());

            return valorEstatistica;
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

        private IList<TemporadaBaseCalculo> ObterEstatisticaTime(TipoCategoria tipoCategoria, IList<TemporadaTime> temporadaTime)
        {
            var temporadaTimeCalculo = new List<TemporadaBaseCalculo>();

            switch (tipoCategoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Porcentagem2Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Porcentagem3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.PorcentagemArremessos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.PorcentagemLancesLivres.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaTime.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
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

        private IList<TemporadaBaseCalculo> ObterEstatisticaOponenteTime(TipoCategoria tipoCategoria, IList<TemporadaTime> temporadaTime)
        {
            var temporadaTimeCalculo = new List<TemporadaBaseCalculo>();

            switch (tipoCategoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos2Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos2PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos3PontosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.ArremessosConvertidos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.ArremessosTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Assistencias:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Assistencias).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.DesperdiciosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Faltas:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Faltas).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.LancesLivres).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.LancesLivresTentados).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Pontos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Porcentagem2Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Porcentagem3Pontos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.PorcentagemArremessos.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.PorcentagemLancesLivres.Value).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RebotesDefensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RebotesOfensivos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.RoubosBola:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.RoubosBola).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.Tocos:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
                        {
                            Ano = x.Ano,
                            ValorEstatistica = Math.Round(x.Times.Select(y => y.EstatisticaOponenteTime.Tocos).Average(), 2)
                        }).ToList();
                        break;
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        temporadaTimeCalculo = temporadaTime.Select(x => new TemporadaBaseCalculo
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
