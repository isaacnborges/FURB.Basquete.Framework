namespace FURB.Basquete.Framework.Domain.Models
{
    public class EstatisticaAvancada
    {
        public double EficienciaJogador { get; set; } //PER
        public double PorcentagemArremessosEficientes { get; set; } //TS%
        public double TaxaTentativas3Pontos { get; set; } //3PAr
        public double TaxaTentativasLancesLivres { get; set; } //FTr
        public double PorcentagemRebotesOfensivos { get; set; } //ORB%
        public double PorcentagemRebotesDefensivos { get; set; } //DRB%
        public double PorcentagemRebotesTotal { get; set; } //TRB%
        public double PorcentagemAssistencias { get; set; } //AST%
        public double PorcentagemRoubosBola { get; set; } //STL%
        public double PorcentagemTocos { get; set; } //BLK%
        public double PorcentagemDesperdiciosBola { get; set; } //TOV%
        public double PorcentagemUsoJogador { get; set; } //USG%
        public double ContribuicaoVitoriaOfensiva { get; set; } //OWS
        public double ContribuicaoVitoriaDefensiva { get; set; } //DWS
        public double ContribuicaoVitoria { get; set; } //WS
        public double ContribuicaoVitoriaPer48 { get; set; } //WS/48
        public double EstimativaContribuicaoOfensiva { get; set; } //OBPM
        public double EstimativaContribuicaoDefensiva { get; set; } //DBPM
        public double EstimativaContribuicaoTotal { get; set; } //BPM - Box Plus/Minus
    }
}
