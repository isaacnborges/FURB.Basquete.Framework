using FURB.Basquete.Framework.Domain.Response;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class EstatisticaAvancada
    {
        public int Idade { get; set; }
        public string SiglaTime { get; set; }
        public int Jogos { get; set; }
        public double EficienciaJogador { get; set; } //PER
        public double? PorcentagemArremessosEficientes { get; set; } //TS%
        public double? TaxaTentativas3Pontos { get; set; } //3PAr
        public double? TaxaTentativasLancesLivres { get; set; } //FTr
        public double? PorcentagemRebotesOfensivos { get; set; } //ORB%
        public double? PorcentagemRebotesDefensivos { get; set; } //DRB%
        public double? PorcentagemRebotesTotal { get; set; } //TRB%
        public double? PorcentagemAssistencias { get; set; } //AST%
        public double? PorcentagemRoubosBola { get; set; } //STL%
        public double? PorcentagemTocos { get; set; } //BLK%
        public double? PorcentagemDesperdiciosBola { get; set; } //TOV%
        public double? PorcentagemUsoJogador { get; set; } //USG%
        public double ContribuicaoVitoriaOfensiva { get; set; } //OWS
        public double ContribuicaoVitoriaDefensiva { get; set; } //DWS
        public double ContribuicaoVitoria { get; set; } //WS
        public double EstimativaContribuicaoOfensiva { get; set; } //OBPM
        public double EstimativaContribuicaoDefensiva { get; set; } //DBPM
        public double EstimativaContribuicaoTotal { get; set; } //BPM - Box Plus/Minus

        public EstatisticaAvancadaResponse ToResponse(int ano, EstatisticaAvancada estatistica)
        {
            return new EstatisticaAvancadaResponse
            {
                Ano = ano,
                Idade = estatistica.Idade,
                SiglaTime = estatistica.SiglaTime,
                Jogos = estatistica.Jogos,
                EficienciaJogador = estatistica.EficienciaJogador,
                PorcentagemArremessosEficientes = estatistica.PorcentagemArremessosEficientes,
                TaxaTentativas3Pontos = estatistica.TaxaTentativas3Pontos,
                TaxaTentativasLancesLivres = estatistica.TaxaTentativasLancesLivres,
                PorcentagemRebotesOfensivos = estatistica.PorcentagemRebotesOfensivos,
                PorcentagemRebotesDefensivos = estatistica.PorcentagemRebotesDefensivos,
                PorcentagemRebotesTotal = estatistica.PorcentagemRebotesTotal,
                PorcentagemAssistencias = estatistica.PorcentagemAssistencias,
                PorcentagemRoubosBola = estatistica.PorcentagemRoubosBola,
                PorcentagemTocos = estatistica.PorcentagemTocos,
                PorcentagemDesperdiciosBola = estatistica.PorcentagemDesperdiciosBola,
                PorcentagemUsoJogador = estatistica.PorcentagemUsoJogador,
                ContribuicaoVitoriaOfensiva = estatistica.ContribuicaoVitoriaOfensiva,
                ContribuicaoVitoriaDefensiva = estatistica.ContribuicaoVitoriaDefensiva,
                ContribuicaoVitoria = estatistica.ContribuicaoVitoria,
                EstimativaContribuicaoOfensiva = estatistica.EstimativaContribuicaoOfensiva,
                EstimativaContribuicaoDefensiva = estatistica.EstimativaContribuicaoDefensiva,
                EstimativaContribuicaoTotal = estatistica.EstimativaContribuicaoTotal
            };
        }
    }
}
