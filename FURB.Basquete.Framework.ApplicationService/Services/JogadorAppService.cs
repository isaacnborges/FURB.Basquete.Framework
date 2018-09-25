using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Models;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class JogadorAppService : AppServiceBase<Jogador>, IJogadorAppService
    {
        private readonly IJogadorService _jogadorService;

        public JogadorAppService(IJogadorService jogador)
            : base(jogador)
        {
            _jogadorService = jogador;
        }

        public IList<TemporadaJogadorCommand> ObterJogadores(ISheet abaPer36, ISheet abaAvancada)
        {
            List<TemporadaJogadorCommand> temporadaJogadores = new List<TemporadaJogadorCommand>();
            List<TemporadaJogadorCommand> jogadores = new List<TemporadaJogadorCommand>();

            AdcionarTemporadaPer36(abaPer36, temporadaJogadores, out IRow headerRow, out int cellCount, out IRow row);
            AdicionarTemporadaAvancada(abaAvancada, temporadaJogadores, jogadores, out headerRow, out row, out cellCount);

            return jogadores.OrderBy(x => x.Nome).ToList();
        }

        private void AdicionarTemporadaAvancada(ISheet abaAvancada, List<TemporadaJogadorCommand> temporadaJogadores, List<TemporadaJogadorCommand> jogadores, out IRow headerRow, out IRow row, out int cellCount)
        {
            headerRow = abaAvancada.GetRow(0);
            cellCount = headerRow.LastCellNum;
            row = abaAvancada.GetRow(0);
            for (int i = (abaAvancada.FirstRowNum + 1); i <= abaAvancada.LastRowNum; i++)
            {
                jogadores.Add(EstatisticaJogadorAvancada(temporadaJogadores, abaAvancada, row, i));
            }
        }

        private void AdcionarTemporadaPer36(ISheet abaPer36, List<TemporadaJogadorCommand> temporadaJogadores, out IRow headerRow, out int cellCount, out IRow row)
        {
            headerRow = abaPer36.GetRow(0);
            cellCount = headerRow.LastCellNum;
            row = abaPer36.GetRow(0);
            for (int i = (abaPer36.FirstRowNum + 1); i <= abaPer36.LastRowNum; i++)
            {
                temporadaJogadores.Add(EstatisticaJogadorPer36(abaPer36, row, i));
            }
        }

        private TemporadaJogadorCommand EstatisticaJogadorPer36(ISheet sheet, IRow row, int indice)
        {
            row = sheet.GetRow(indice);
            var estatisticaPer36 = new EstatisticaPer36Jogador();

            estatisticaPer36.Idade = Int32.Parse(row.GetCell(4).ToString());
            estatisticaPer36.SiglaTime = row.GetCell(5).ToString();
            estatisticaPer36.Jogos = Int32.Parse(row.GetCell(6).ToString());
            estatisticaPer36.JogosIniciados = Int32.Parse(row.GetCell(7).ToString());
            estatisticaPer36.ArremessosConvertidos = double.Parse(EstatisticaFormatada(row.GetCell(9).ToString()));
            estatisticaPer36.ArremessosTentados = double.Parse(EstatisticaFormatada(row.GetCell(10).ToString()));
            estatisticaPer36.PorcentagemArremessos = PorcentagemFormatada(row.GetCell(11).ToString());
            estatisticaPer36.Arremessos3Pontos = double.Parse(EstatisticaFormatada(row.GetCell(12).ToString()));
            estatisticaPer36.Arremessos3PontosTentados = double.Parse(EstatisticaFormatada(row.GetCell(13).ToString()));
            estatisticaPer36.Porcentagem3Pontos = PorcentagemFormatada(row.GetCell(14).ToString());
            estatisticaPer36.Arremessos2Pontos = double.Parse(EstatisticaFormatada(row.GetCell(15).ToString()));
            estatisticaPer36.Arremessos2PontosTentados = double.Parse(EstatisticaFormatada(row.GetCell(16).ToString()));
            estatisticaPer36.Porcentagem2Pontos = PorcentagemFormatada(row.GetCell(17).ToString());
            estatisticaPer36.LancesLivres = double.Parse(EstatisticaFormatada(row.GetCell(18).ToString()));
            estatisticaPer36.LancesLivresTentados = double.Parse(EstatisticaFormatada(row.GetCell(19).ToString()));
            estatisticaPer36.PorcentagemLancesLivres = PorcentagemFormatada(row.GetCell(20).ToString());
            estatisticaPer36.RebotesOfensivos = double.Parse(EstatisticaFormatada(row.GetCell(21).ToString()));
            estatisticaPer36.RebotesDefensivos = double.Parse(EstatisticaFormatada(row.GetCell(22).ToString()));
            estatisticaPer36.TotalRebotes = double.Parse(EstatisticaFormatada(row.GetCell(23).ToString()));
            estatisticaPer36.Assistencias = double.Parse(EstatisticaFormatada(row.GetCell(24).ToString()));
            estatisticaPer36.RoubosBola = double.Parse(EstatisticaFormatada(row.GetCell(25).ToString()));
            estatisticaPer36.Tocos = double.Parse(EstatisticaFormatada(row.GetCell(26).ToString()));
            estatisticaPer36.DesperdiciosBola = double.Parse(EstatisticaFormatada(row.GetCell(27).ToString()));
            estatisticaPer36.Faltas = double.Parse(EstatisticaFormatada(row.GetCell(28).ToString()));
            estatisticaPer36.Pontos = double.Parse(EstatisticaFormatada(row.GetCell(29).ToString()));

            var jogaodor = new TemporadaJogadorCommand();
            jogaodor.Ano = Int32.Parse(row.GetCell(0).ToString());
            jogaodor.Nome = row.GetCell(2).ToString().Replace("*", "");
            jogaodor.Posicao = row.GetCell(3).ToString();
            jogaodor.EstatisticaPer36 = estatisticaPer36;

            return jogaodor;
        }

        private TemporadaJogadorCommand EstatisticaJogadorAvancada(IList<TemporadaJogadorCommand> jogadores, ISheet sheet, IRow row, int indice)
        {
            row = sheet.GetRow(indice);
            var estatisticaAvancada = new EstatisticaAvancada();

            estatisticaAvancada.Idade = Int32.Parse(row.GetCell(4).ToString());
            estatisticaAvancada.SiglaTime = row.GetCell(5).ToString();
            estatisticaAvancada.Jogos = Int32.Parse(row.GetCell(6).ToString());
            estatisticaAvancada.EficienciaJogador = double.Parse(EstatisticaFormatada(row.GetCell(8).ToString()));
            estatisticaAvancada.PorcentagemArremessosEficientes = PorcentagemFormatada(row.GetCell(9).ToString());
            estatisticaAvancada.TaxaTentativas3Pontos = PorcentagemFormatada(row.GetCell(10).ToString());
            estatisticaAvancada.TaxaTentativasLancesLivres = PorcentagemFormatada(row.GetCell(11).ToString());
            estatisticaAvancada.PorcentagemRebotesOfensivos = double.Parse(EstatisticaFormatada(row.GetCell(12).ToString()));
            estatisticaAvancada.PorcentagemRebotesDefensivos = double.Parse(EstatisticaFormatada(row.GetCell(13).ToString()));
            estatisticaAvancada.PorcentagemRebotesTotal = double.Parse(EstatisticaFormatada(row.GetCell(14).ToString()));
            estatisticaAvancada.PorcentagemAssistencias = double.Parse(EstatisticaFormatada(row.GetCell(15).ToString()));
            estatisticaAvancada.PorcentagemRoubosBola = double.Parse(EstatisticaFormatada(row.GetCell(16).ToString()));
            estatisticaAvancada.PorcentagemTocos = double.Parse(EstatisticaFormatada(row.GetCell(17).ToString()));
            estatisticaAvancada.PorcentagemDesperdiciosBola = double.TryParse(EstatisticaFormatada(row.GetCell(18).ToString()), out double number) ? number : 0.0;
            estatisticaAvancada.PorcentagemUsoJogador = double.Parse(EstatisticaFormatada(row.GetCell(19).ToString()));
            estatisticaAvancada.ContribuicaoVitoriaOfensiva = double.Parse(EstatisticaFormatada(row.GetCell(20).ToString()));
            estatisticaAvancada.ContribuicaoVitoriaDefensiva = double.Parse(EstatisticaFormatada(row.GetCell(21).ToString()));
            estatisticaAvancada.ContribuicaoVitoria = double.Parse(EstatisticaFormatada(row.GetCell(22).ToString()));
            estatisticaAvancada.EstimativaContribuicaoOfensiva = double.Parse(EstatisticaFormatada(row.GetCell(24).ToString()));
            estatisticaAvancada.EstimativaContribuicaoDefensiva = double.Parse(EstatisticaFormatada(row.GetCell(25).ToString()));
            estatisticaAvancada.EstimativaContribuicaoTotal = double.Parse(EstatisticaFormatada(row.GetCell(26).ToString()));

            var jogador = jogadores.FirstOrDefault(x => x.Nome == row.GetCell(2).ToString().Replace("*", "") &&
                                                        x.EstatisticaPer36.SiglaTime == row.GetCell(5).ToString());
            jogador.EstatsticaAvancada = estatisticaAvancada;

            return jogador;
        }
    }
}
