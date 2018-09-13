using FURB.Basquete.Framework.Domain.Response;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class EstatisticaPer36Jogador : EstatisticaPer36
    {
        public int Idade { get; set; }
        public string SiglaTime { get; set; }
        public int Jogos { get; set; }
        public int JogosIniciados { get; set; }

        public EstatisticaPer36JogadorResponse ToJogadorResponse(int ano, EstatisticaPer36Jogador estatistica)
        {
            return new EstatisticaPer36JogadorResponse
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
                Pontos = estatistica.Pontos,
                Idade = estatistica.Idade,
                SiglaTime = estatistica.SiglaTime,
                Jogos = estatistica.Jogos,
                JogosIniciados = estatistica.JogosIniciados
            };
        }
    }
}
