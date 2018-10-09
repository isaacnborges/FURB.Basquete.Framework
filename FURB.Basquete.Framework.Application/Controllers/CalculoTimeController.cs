using FURB.Basquete.Framework.Application.Models;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Response;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FURB.Basquete.Framework.Application.Controllers
{
    public class CalculoTimeController : Controller
    {
        private readonly ICalculoTimeAppService _calculoTimeAppService;

        public CalculoTimeController(ICalculoTimeAppService calculoTimeAppService)
        {
            _calculoTimeAppService = calculoTimeAppService;
        }

        public IActionResult Index()
        {
            ViewBag.Criterio = CarregarCriterios();
            ViewBag.Conferencia = CarregarConferencia();
            ViewBag.Categoria = CarregarCategoria();            

            return View();
        }

        public ActionResult Calcular([FromBody]ModelRequest<CalculoTimeModel> timeCommand)
        {
            CalculoTimeCommand timeCalculo = new CalculoTimeCommand();

            if (timeCommand.Value.TipoCalculo.Equals("media", StringComparison.InvariantCultureIgnoreCase))
            {
                timeCalculo.TipoCalculo = TipoCalculo.MediaAnual;
                timeCalculo.AnoInicio = timeCommand.Value.AnoInicio;
                timeCalculo.AnoFim = timeCommand.Value.AnoFim;
            }
            else
            {
                timeCalculo.TipoCalculo = TipoCalculo.Media3Anos;
                timeCalculo.AnoInicio = timeCommand.Value.AnoBase - 1;
                timeCalculo.AnoFim = timeCommand.Value.AnoBase + 1;
            }

            timeCalculo.Categoria = EnumUtil.ParseEnum<TipoCategoria>(timeCommand.Value.Categoria.Replace(" ", ""));
            timeCalculo.Criterio = timeCommand.Value.Criterio.Replace(" ", "") == "Por36minutos" ? TipoCriterio.EstatisticaPer36Minutes : TipoCriterio.EstatisticaPer36Oponente;
            timeCalculo.Conferencia = EnumUtil.ParseEnum<TipoConferencia>(timeCommand.Value.Conferencia);
            var times = _calculoTimeAppService.CalcularTime(timeCalculo).ToList();

            ViewBag.dataSource = times;

            var datasource = times;

            return Json(datasource);
        }

        public ActionResult CalcularTime([FromBody]ModelRequest<CalculoTimeEspecificoModel> timeCommand)
        {
            var categoria = EnumUtil.ParseEnum<TipoCategoria>(timeCommand.Value.Categoria.Replace(" ", ""));
            var dados = _calculoTimeAppService.CalcularTimeAnoCategoria(timeCommand.Value.AnoInicio, timeCommand.Value.AnoFim, categoria)
                .OrderBy(x => x.Ano);

            List<LineChartData> data = new List<LineChartData>();

            foreach (var item in dados)
            {
                data.Add(new LineChartData
                {
                    xValor = new DateTime(item.Ano, DateTime.Now.Month, DateTime.Now.Day),
                    yTime = item.EstatisticaMedia
                });
            }

            return Json(data);
        }

        private IList<string> CarregarCriterios()
        {
            var listaCriterios = new List<string>();
            listaCriterios.Add("Por 36 minutos");
            listaCriterios.Add("Por 36 minutos oponente");

            return listaCriterios;
        }

        private IList<string> CarregarConferencia()
        {
            var listaConferencia = new List<string>();
            listaConferencia.Add("Ambas");
            listaConferencia.Add("Leste");
            listaConferencia.Add("Oeste");

            return listaConferencia;
        }

        private IList<string> CarregarCategoria()
        {
            var listaCategoria = new List<string>();
            listaCategoria.Add("Arremessos Convertidos");
            listaCategoria.Add("Arremessos Tentados");
            listaCategoria.Add("Porcentagem Arremessos");
            listaCategoria.Add("Arremessos 3Pontos");
            listaCategoria.Add("Arremessos 3Pontos Tentados");
            listaCategoria.Add("Porcentagem 3Pontos");
            listaCategoria.Add("Arremessos 2Pontos");
            listaCategoria.Add("Arremessos 2Pontos Tentados");
            listaCategoria.Add("Porcentagem 2Pontos");
            listaCategoria.Add("Lances Livres");
            listaCategoria.Add("Lances Livres Tentados");
            listaCategoria.Add("Porcentagem Lances Livres");
            listaCategoria.Add("Rebotes Ofensivos");
            listaCategoria.Add("Rebotes Defensivos");
            listaCategoria.Add("Total Rebotes");
            listaCategoria.Add("Assistencias");
            listaCategoria.Add("Roubos Bola");
            listaCategoria.Add("Tocos");
            listaCategoria.Add("Desperdicios Bola");
            listaCategoria.Add("Faltas");
            listaCategoria.Add("Pontos");

            return listaCategoria.OrderBy(x => x).ToList();
        }
    }

    public class LineChartData
    {
        public DateTime xValor;
        public double yTime;
    }
}