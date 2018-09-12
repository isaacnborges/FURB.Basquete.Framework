using FURB.Basquete.Framework.Domain.Response;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class EstatisticaPer36
    {
        public double ArremessosConvertidos { get; set; }
        public double ArremessosTentados { get; set; }
        public double? PorcentagemArremessos { get; set; }
        public double? Arremessos3Pontos { get; set; }
        public double Arremessos3PontosTentados { get; set; }
        public double? Porcentagem3Pontos { get; set; }
        public double Arremessos2Pontos { get; set; }
        public double Arremessos2PontosTentados { get; set; }
        public double? Porcentagem2Pontos { get; set; }
        public double LancesLivres { get; set; }
        public double LancesLivresTentados { get; set; }
        public double? PorcentagemLancesLivres { get; set; }
        public double RebotesOfensivos { get; set; }
        public double RebotesDefensivos { get; set; }
        public double TotalRebotes { get; set; }
        public double Assistencias { get; set; }
        public double RoubosBola { get; set; }
        public double Tocos { get; set; }
        public double DesperdiciosBola { get; set; }
        public double Faltas { get; set; }
        public double Pontos { get; set; }

        public EstatisticaPer36Response ToResponse(int ano, EstatisticaPer36 estatistica)
        {
            return new EstatisticaPer36Response
            {
                Ano = ano,
                ArremessosConvertidos = estatistica.ArremessosConvertidos,
                ArremessosTentados = estatistica.ArremessosTentados,
                PorcentagemArremessos = estatistica.PorcentagemArremessos,
                Arremessos3Pontos = estatistica.Arremessos3Pontos,
                Arremessos3PontosTentados = estatistica.Arremessos3PontosTentados,
                Porcentagem3Pontos = estatistica.Porcentagem3Pontos,
                Arremessos2Pontos = estatistica.Arremessos2Pontos,
                Arremessos2PontosTentados = estatistica.Arremessos2PontosTentados,
                Porcentagem2Pontos = estatistica.Porcentagem2Pontos,
                LancesLivres = estatistica.LancesLivres,
                LancesLivresTentados = estatistica.LancesLivresTentados,
                PorcentagemLancesLivres = estatistica.PorcentagemLancesLivres,
                RebotesOfensivos = estatistica.RebotesOfensivos,
                RebotesDefensivos = estatistica.RebotesDefensivos,
                TotalRebotes = estatistica.TotalRebotes,
                Assistencias = estatistica.Assistencias,
                RoubosBola = estatistica.RoubosBola,
                Tocos = estatistica.Tocos,
                DesperdiciosBola = estatistica.DesperdiciosBola,
                Faltas = estatistica.Faltas,
                Pontos = estatistica.Pontos
            };
        }
    }
}
