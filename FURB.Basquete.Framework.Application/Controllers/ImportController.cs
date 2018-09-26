using FURB.Basquete.Framework.ApplicationService.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.IO;
using System.Linq;
using System.Text;

namespace FURB.Basquete.Framework.Application.Controllers
{
    public class ImportController : Controller
    {
        private IHostingEnvironment _hostingEnvironment;
        private readonly ITimeAppService _timeAppService;
        private readonly IJogadorAppService _jogadorAppService;
        private readonly ITemporadaJogadorAppService _temporadaJogadorAppService;
        private readonly ITemporadaTimeAppService _temporadaTimeAppService;

        public ImportController(IHostingEnvironment hostingEnvironment,
                                ITimeAppService timeAppService,
                                IJogadorAppService jogadorAppService,
                                ITemporadaJogadorAppService temporadaJogadorAppService,
                                ITemporadaTimeAppService temporadaTimeAppService)
        {
            _hostingEnvironment = hostingEnvironment;
            _timeAppService = timeAppService;
            _jogadorAppService = jogadorAppService;
            _temporadaJogadorAppService = temporadaJogadorAppService;
            _temporadaTimeAppService = temporadaTimeAppService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public ActionResult OnPostImport()
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
                        var times = _timeAppService.ObterTimes(primeiraAba, segundaAba);
                        _temporadaTimeAppService.AdicionarTemporadaTimes(times);
                    }
                    else
                    {
                        var jogadores = _jogadorAppService.ObterJogadores(primeiraAba, segundaAba);
                        _temporadaJogadorAppService.AdicionarTemporadaJogador(jogadores);
                    }
                }
            }

            return Content(sb.ToString());
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