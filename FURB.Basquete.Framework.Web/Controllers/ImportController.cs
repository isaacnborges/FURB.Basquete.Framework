using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace FURB.Basquete.Framework.Web.Controllers
{
    public class ImportController : Controller
    {
        private IHostingEnvironment _hostingEnvironment;
        private readonly ITemporadaJogadorAppService _temporadaJogadorAppService;
        private readonly ITemporadaTimeAppService _temporadaTimeAppService;

        public ImportController(IHostingEnvironment hostingEnvironment, 
                                ITemporadaJogadorAppService temporadaJogadorAppService,
                                ITemporadaTimeAppService temporadaTimeAppService)
        {
            _hostingEnvironment = hostingEnvironment;
            _temporadaJogadorAppService = temporadaJogadorAppService;
            _temporadaTimeAppService = temporadaTimeAppService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public ActionResult OnPostImport(string teste)
        {
            string tipoImportacao = Request.Form.Files[1].Name;
            IFormFile file = Request.Form.Files[0];
            string folderName = "Upload";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string newPath = Path.Combine(webRootPath, folderName);
            StringBuilder sb = new StringBuilder();
            if (!Directory.Exists(newPath))
            {
                Directory.CreateDirectory(newPath);
            }
            if (file.Length > 0)
            {
                string sFileExtension = Path.GetExtension(file.FileName).ToLower();
                ISheet primeiraAba;
                ISheet segundaAba;
                string fullPath = Path.Combine(newPath, file.FileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                    stream.Position = 0;
                    if (sFileExtension == ".xls")
                    {
                        HSSFWorkbook hssfwb = new HSSFWorkbook(stream);
                        primeiraAba = hssfwb.GetSheetAt(0);
                        segundaAba = hssfwb.GetSheetAt(1);
                    }
                    else
                    {
                        XSSFWorkbook hssfwb = new XSSFWorkbook(stream);
                        primeiraAba = hssfwb.GetSheetAt(0);
                        segundaAba = hssfwb.GetSheetAt(1);
                    }

                    sb.AppendLine(ImportarAba(primeiraAba));
                    sb.AppendLine(ImportarAba(segundaAba));

                    if (tipoImportacao.Equals("Times", StringComparison.InvariantCultureIgnoreCase))
                    {
                        var times = ObterTimes(primeiraAba, segundaAba);
                        _temporadaTimeAppService.AdicionarTemporadaTimes(times);
                    }
                    else
                    {
                        var jogadores = ObterJogadores(primeiraAba, segundaAba);
                        _temporadaJogadorAppService.AdicionarTemporadaJogador(jogadores);
                    }                    
                }
            }

            return Content(sb.ToString());
        }

        private IList<TemporadaJogadorCommand> ObterJogadores(ISheet abaPer36, ISheet abaAvancada)

        {
            List<TemporadaJogadorCommand> temporadaJogadores = new List<TemporadaJogadorCommand>();
            List<TemporadaJogadorCommand> jogadores = new List<TemporadaJogadorCommand>();

            //Temporada Time
            IRow headerRow = abaPer36.GetRow(0);
            int cellCount = headerRow.LastCellNum;
            IRow row = abaPer36.GetRow(0);
            for (int i = (abaPer36.FirstRowNum + 1); i <= abaPer36.LastRowNum; i++)
            {
                temporadaJogadores.Add(EstatisticaJogadorPer36(abaPer36, row, i));
            }

            //Temporada Oponente Time
            headerRow = abaAvancada.GetRow(0);
            cellCount = headerRow.LastCellNum;
            row = abaAvancada.GetRow(0);
            for (int i = (abaAvancada.FirstRowNum + 1); i <= abaAvancada.LastRowNum; i++)
            {
                jogadores.Add(EstatisticaJogadorAvancada(temporadaJogadores, abaAvancada, row, i));
            }

            return jogadores.OrderBy(x => x.Nome).ToList();
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
            double number;

            estatisticaAvancada.EficienciaJogador = double.Parse(EstatisticaFormatada(row.GetCell(8).ToString()));
            estatisticaAvancada.PorcentagemArremessosEficientes = PorcentagemFormatada(row.GetCell(9).ToString());
            estatisticaAvancada.TaxaTentativas3Pontos = PorcentagemFormatada(row.GetCell(10).ToString());
            estatisticaAvancada.TaxaTentativasLancesLivres = PorcentagemFormatada(row.GetCell(11).ToString());
            estatisticaAvancada.PorcentagemRebotesOfensivos = double.Parse(EstatisticaFormatada(row.GetCell(12).ToString()));
            estatisticaAvancada.PorcentagemRebotesDefensivos = double.Parse(row.GetCell(13).ToString());
            estatisticaAvancada.PorcentagemRebotesTotal = double.Parse(EstatisticaFormatada(row.GetCell(14).ToString()));
            estatisticaAvancada.PorcentagemAssistencias = double.Parse(EstatisticaFormatada(row.GetCell(15).ToString()));
            estatisticaAvancada.PorcentagemRoubosBola = double.Parse(row.GetCell(16).ToString());
            estatisticaAvancada.PorcentagemTocos = double.Parse(EstatisticaFormatada(row.GetCell(17).ToString()));
            estatisticaAvancada.PorcentagemDesperdiciosBola = double.TryParse(EstatisticaFormatada(row.GetCell(18).ToString()), out number) ? number : 0.0;
            estatisticaAvancada.PorcentagemUsoJogador = double.Parse(row.GetCell(19).ToString());
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

        private IList<TemporadaTimeCommand> ObterTimes(ISheet abaTime, ISheet abaOponente)
        {
            List<TemporadaTimeCommand> temporadaTimes = new List<TemporadaTimeCommand>();
            List<TemporadaTimeCommand> times = new List<TemporadaTimeCommand>();

            //Temporada Time
            IRow headerRow = abaTime.GetRow(0);
            int cellCount = headerRow.LastCellNum;
            IRow row = abaTime.GetRow(0);
            for (int i = (abaTime.FirstRowNum + 1); i <= abaTime.LastRowNum; i++)
            {                
                temporadaTimes.Add(EstatisticaTime(abaTime, row, i));
            }

            //Temporada Oponente Time
            headerRow = abaOponente.GetRow(0);
            cellCount = headerRow.LastCellNum;
            row = abaOponente.GetRow(0);
            for (int i = (abaOponente.FirstRowNum + 1); i <= abaOponente.LastRowNum; i++)
            {
                times.Add(EstatisticaOponenteTime(temporadaTimes, abaOponente, row, i));
            }

            return times.OrderBy(x => x.Nome).ToList();
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

        private string EstatisticaFormatada(string valor)
        {
            return valor.Replace(".", ",");
        }

        private double? PorcentagemFormatada(string valor)
        {
            if (valor == string.Empty)
                return null;

            valor = valor.Replace(".", "");
            var porcentagem = valor.Substring(0, 2) + "," + valor.Substring(2, 1);
            return double.Parse(porcentagem);
        }

        private string ImportarAba(ISheet sheet)
        {
            IRow row = sheet.GetRow(0);
            StringBuilder sb = new StringBuilder();

            IRow headerRow = sheet.GetRow(0); //Get Header Row
            int cellCount = headerRow.LastCellNum;
            sb.Append("<table class='table'><tr>");
            for (int j = 0; j < cellCount; j++)
            {
                ICell cell = headerRow.GetCell(j);
                if (cell == null || string.IsNullOrWhiteSpace(cell.ToString())) continue;
                sb.Append("<th>" + cell.ToString() + "</th>");
            }
            sb.Append("</tr>");
            sb.AppendLine("<tr>");
            for (int i = (sheet.FirstRowNum + 1); i <= sheet.LastRowNum; i++) //Read Excel File
            {
                row = sheet.GetRow(i);
                if (row == null) continue;
                if (row.Cells.All(d => d.CellType == CellType.Blank)) continue;
                for (int j = row.FirstCellNum; j < cellCount; j++)
                {
                    if (row.GetCell(j) != null)
                        sb.Append("<td>" + row.GetCell(j).ToString() + "</td>");
                }
                sb.AppendLine("</tr>");
            }
            sb.Append("</table>");

            return sb.ToString();
        }
    }
}