using FURB.Basquete.Framework.Domain.Models;

namespace FURB.Basquete.Framework.Domain.Response
{
    public class EstatisticaPer36Response
    {
        public int Ano { get; set; }
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
    }
}
