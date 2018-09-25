using System;
using System.Collections.Generic;
using System.Linq;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Models;
using NPOI.SS.UserModel;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class TimeAppService : AppServiceBase<Time>, ITimeAppService
    {
        private readonly ITimeService _timeService;

        public TimeAppService(ITimeService timeService)
            : base(timeService)
        {
            _timeService = timeService;
        }

        public IList<TemporadaTimeCommand> ObterTimes(ISheet abaTime, ISheet abaOponente)
        {
            List<TemporadaTimeCommand> temporadaTimes = new List<TemporadaTimeCommand>();
            List<TemporadaTimeCommand> times = new List<TemporadaTimeCommand>();

            AdcionarTemporadaTime(abaTime, temporadaTimes, out IRow headerRow, out int cellCount, out IRow row);
            AdicionarTemporadaOponenteTime(abaOponente, temporadaTimes, times, out headerRow, out row, out cellCount);

            return times.OrderBy(x => x.Nome).ToList();
        }

        private void AdicionarTemporadaOponenteTime(ISheet abaOponente, List<TemporadaTimeCommand> temporadaTimes, List<TemporadaTimeCommand> times, out IRow headerRow, out IRow row, out int cellCount)
        {
            headerRow = abaOponente.GetRow(0);
            cellCount = headerRow.LastCellNum;
            row = abaOponente.GetRow(0);
            for (int i = (abaOponente.FirstRowNum + 1); i <= abaOponente.LastRowNum; i++)
            {
                times.Add(EstatisticaOponenteTime(temporadaTimes, abaOponente, row, i));
            }
        }

        private void AdcionarTemporadaTime(ISheet abaTime, List<TemporadaTimeCommand> temporadaTimes, out IRow headerRow, out int cellCount, out IRow row)
        {
            headerRow = abaTime.GetRow(0);
            cellCount = headerRow.LastCellNum;
            row = abaTime.GetRow(0);
            for (int i = (abaTime.FirstRowNum + 1); i <= abaTime.LastRowNum; i++)
            {
                temporadaTimes.Add(EstatisticaTime(abaTime, row, i));
            }
        }

        private TemporadaTimeCommand EstatisticaTime(ISheet sheet, IRow row, int indice)
        {
            row = sheet.GetRow(indice);
            var estatisticaTime = new EstatisticaPer36();

            estatisticaTime.ArremessosConvertidos = double.Parse(EstatisticaFormatada(row.GetCell(5).ToString()));
            estatisticaTime.ArremessosTentados = double.Parse(EstatisticaFormatada(row.GetCell(6).ToString()));
            estatisticaTime.PorcentagemArremessos = PorcentagemFormatada(row.GetCell(7).ToString());
            estatisticaTime.Arremessos3Pontos = double.Parse(EstatisticaFormatada(row.GetCell(8).ToString()));
            estatisticaTime.Arremessos3PontosTentados = double.Parse(EstatisticaFormatada(row.GetCell(9).ToString()));
            estatisticaTime.Porcentagem3Pontos = PorcentagemFormatada(row.GetCell(10).ToString());
            estatisticaTime.Arremessos2Pontos = double.Parse(EstatisticaFormatada(row.GetCell(11).ToString()));
            estatisticaTime.Arremessos2PontosTentados = double.Parse(EstatisticaFormatada(row.GetCell(12).ToString()));
            estatisticaTime.Porcentagem2Pontos = PorcentagemFormatada(row.GetCell(13).ToString());
            estatisticaTime.LancesLivres = double.Parse(EstatisticaFormatada(row.GetCell(14).ToString()));
            estatisticaTime.LancesLivresTentados = double.Parse(EstatisticaFormatada(row.GetCell(15).ToString()));
            estatisticaTime.PorcentagemLancesLivres = PorcentagemFormatada(row.GetCell(16).ToString());
            estatisticaTime.RebotesOfensivos = double.Parse(EstatisticaFormatada(row.GetCell(17).ToString()));
            estatisticaTime.RebotesDefensivos = double.Parse(EstatisticaFormatada(row.GetCell(18).ToString()));
            estatisticaTime.TotalRebotes = double.Parse(EstatisticaFormatada(row.GetCell(19).ToString()));
            estatisticaTime.Assistencias = double.Parse(EstatisticaFormatada(row.GetCell(20).ToString()));
            estatisticaTime.RoubosBola = double.Parse(EstatisticaFormatada(row.GetCell(21).ToString()));
            estatisticaTime.Tocos = double.Parse(EstatisticaFormatada(row.GetCell(22).ToString()));
            estatisticaTime.DesperdiciosBola = double.Parse(EstatisticaFormatada(row.GetCell(23).ToString()));
            estatisticaTime.Faltas = double.Parse(EstatisticaFormatada(row.GetCell(24).ToString()));
            estatisticaTime.Pontos = double.Parse(EstatisticaFormatada(row.GetCell(25).ToString()));

            var time = new TemporadaTimeCommand();
            time.Ano = Int32.Parse(row.GetCell(0).ToString());
            time.Nome = row.GetCell(2).ToString().Replace("*", "");
            time.Sigla = row.GetCell(26) != null ? row.GetCell(26).ToString() : string.Empty;
            time.Conferencia = row.GetCell(27) != null ? row.GetCell(27).ToString() : string.Empty;
            time.EstatisticaTime = estatisticaTime;

            return time;
        }

        private TemporadaTimeCommand EstatisticaOponenteTime(IList<TemporadaTimeCommand> times, ISheet sheet, IRow row, int indice)
        {
            row = sheet.GetRow(indice);
            var estatisticaOponenteTime = new EstatisticaPer36();

            estatisticaOponenteTime.ArremessosConvertidos = double.Parse(EstatisticaFormatada(row.GetCell(5).ToString()));
            estatisticaOponenteTime.ArremessosTentados = double.Parse(EstatisticaFormatada(row.GetCell(6).ToString()));
            estatisticaOponenteTime.PorcentagemArremessos = PorcentagemFormatada(row.GetCell(7).ToString());
            estatisticaOponenteTime.Arremessos3Pontos = double.Parse(EstatisticaFormatada(row.GetCell(8).ToString()));
            estatisticaOponenteTime.Arremessos3PontosTentados = double.Parse(EstatisticaFormatada(row.GetCell(9).ToString()));
            estatisticaOponenteTime.Porcentagem3Pontos = PorcentagemFormatada(row.GetCell(10).ToString());
            estatisticaOponenteTime.Arremessos2Pontos = double.Parse(EstatisticaFormatada(row.GetCell(11).ToString()));
            estatisticaOponenteTime.Arremessos2PontosTentados = double.Parse(EstatisticaFormatada(row.GetCell(12).ToString()));
            estatisticaOponenteTime.Porcentagem2Pontos = PorcentagemFormatada(row.GetCell(13).ToString());
            estatisticaOponenteTime.LancesLivres = double.Parse(EstatisticaFormatada(row.GetCell(14).ToString()));
            estatisticaOponenteTime.LancesLivresTentados = double.Parse(EstatisticaFormatada(row.GetCell(15).ToString()));
            estatisticaOponenteTime.PorcentagemLancesLivres = PorcentagemFormatada(row.GetCell(16).ToString());
            estatisticaOponenteTime.RebotesOfensivos = double.Parse(EstatisticaFormatada(row.GetCell(17).ToString()));
            estatisticaOponenteTime.RebotesDefensivos = double.Parse(EstatisticaFormatada(row.GetCell(18).ToString()));
            estatisticaOponenteTime.TotalRebotes = double.Parse(EstatisticaFormatada(row.GetCell(19).ToString()));
            estatisticaOponenteTime.Assistencias = double.Parse(EstatisticaFormatada(row.GetCell(20).ToString()));
            estatisticaOponenteTime.RoubosBola = double.Parse(EstatisticaFormatada(row.GetCell(21).ToString()));
            estatisticaOponenteTime.Tocos = double.Parse(EstatisticaFormatada(row.GetCell(22).ToString()));
            estatisticaOponenteTime.DesperdiciosBola = double.Parse(EstatisticaFormatada(row.GetCell(23).ToString()));
            estatisticaOponenteTime.Faltas = double.Parse(EstatisticaFormatada(row.GetCell(24).ToString()));
            estatisticaOponenteTime.Pontos = double.Parse(EstatisticaFormatada(row.GetCell(25).ToString()));

            var time = times.FirstOrDefault(x => x.Nome == row.GetCell(2).ToString().Replace("*", ""));
            time.EstatisticaOponenteTime = estatisticaOponenteTime;

            return time;
        }
    }
}
