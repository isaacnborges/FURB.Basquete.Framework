using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using System.Collections.Generic;
using System.Linq;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class CalculoTimeService
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
                IEnumerable<IEnumerable<double>> estatistica;
                if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                {
                    estatistica = ObterEstatisticaTime(calculoTime.Categoria, times);
                }
                else if (calculoTime.Criterio == TipoCriterio.EstatisticaPer36Oponente)
                {
                    estatistica = ObterEstatisticaOponenteTime(calculoTime.Categoria, times);
                }

                //Conferencia
            }
        }

        private IEnumerable<IEnumerable<double>> ObterEstatisticaTime(TipoCategoria tipoCategoria, IList<TemporadaTime> temporadaTime)
        {
            switch (tipoCategoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Arremessos2Pontos));
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Arremessos2PontosTentados));
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Arremessos3Pontos.Value));
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Arremessos3PontosTentados));
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.ArremessosConvertidos));
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.ArremessosTentados));
                    }
                case TipoCategoria.Assistencias:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Assistencias));
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.DesperdiciosBola));
                    }
                case TipoCategoria.Faltas:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Faltas));
                    }
                case TipoCategoria.LancesLivres:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.LancesLivres));
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.LancesLivresTentados));
                    }
                case TipoCategoria.Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Pontos));
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Porcentagem2Pontos.Value));
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Porcentagem3Pontos.Value));
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.PorcentagemArremessos.Value));
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.PorcentagemLancesLivres.Value));
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.RebotesDefensivos));
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.RebotesOfensivos));
                    }
                case TipoCategoria.RoubosBola:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.RoubosBola));
                    }
                case TipoCategoria.Tocos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.Tocos));
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaTime.TotalRebotes));
                    }
                default:
                    return null;
            }
        }

        private IEnumerable<IEnumerable<double>> ObterEstatisticaOponenteTime(TipoCategoria tipoCategoria, IList<TemporadaTime> temporadaTime)
        {
            switch (tipoCategoria)
            {
                case TipoCategoria.Arremessos2Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos2Pontos));
                    }
                case TipoCategoria.Arremessos2PontosTentados:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos2PontosTentados));
                    }
                case TipoCategoria.Arremessos3Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos3Pontos.Value));
                    }
                case TipoCategoria.Arremessos3PontosTentados:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Arremessos3PontosTentados));
                    }
                case TipoCategoria.ArremessosConvertidos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.ArremessosConvertidos));
                    }
                case TipoCategoria.ArremessosTentados:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.ArremessosTentados));
                    }
                case TipoCategoria.Assistencias:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Assistencias));
                    }
                case TipoCategoria.DesperdiciosBola:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.DesperdiciosBola));
                    }
                case TipoCategoria.Faltas:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Faltas));
                    }
                case TipoCategoria.LancesLivres:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.LancesLivres));
                    }
                case TipoCategoria.LancesLivresTentados:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.LancesLivresTentados));
                    }
                case TipoCategoria.Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Pontos));
                    }
                case TipoCategoria.Porcentagem2Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Porcentagem2Pontos.Value));
                    }
                case TipoCategoria.Porcentagem3Pontos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Porcentagem3Pontos.Value));
                    }
                case TipoCategoria.PorcentagemArremessos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.PorcentagemArremessos.Value));
                    }
                case TipoCategoria.PorcentagemLancesLivres:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.PorcentagemLancesLivres.Value));
                    }
                case TipoCategoria.RebotesDefensivos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.RebotesDefensivos));
                    }
                case TipoCategoria.RebotesOfensivos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.RebotesOfensivos));
                    }
                case TipoCategoria.RoubosBola:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.RoubosBola));
                    }
                case TipoCategoria.Tocos:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.Tocos));
                    }
                case TipoCategoria.TotalRebotes:
                    {
                        return temporadaTime.Select(x => x.Times.Select(y => y.EstatisticaOponenteTime.TotalRebotes));
                    }
                default:
                    return null;
            }
        }
    }
}
