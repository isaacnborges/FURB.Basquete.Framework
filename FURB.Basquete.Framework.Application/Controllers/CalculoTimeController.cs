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

        public ActionResult Calcular([FromBody]ModelRequest<CalculoTimeModel> value)
        {
            CalculoTimeCommand timeCalculo = new CalculoTimeCommand();

            if (value.Value.TipoCalculo.Equals("media", StringComparison.InvariantCultureIgnoreCase))
            {
                timeCalculo.TipoCalculo = TipoCalculo.MediaAnual;
                timeCalculo.AnoInicio = value.Value.AnoInicio;
                timeCalculo.AnoFim = value.Value.AnoFim;
            }
            else
            {
                timeCalculo.TipoCalculo = TipoCalculo.Media3Anos;
                timeCalculo.AnoInicio = value.Value.AnoBase - 1;
                timeCalculo.AnoFim = value.Value.AnoBase + 1;
            }

            timeCalculo.Categoria = EnumUtil.ParseEnum<TipoCategoria>(value.Value.Categoria.Replace(" ", ""));
            timeCalculo.Criterio = value.Value.Criterio.Replace(" ", "") == "Por36minutos" ? TipoCriterio.EstatisticaPer36Minutes : TipoCriterio.EstatisticaPer36Oponente;
            timeCalculo.Conferencia = EnumUtil.ParseEnum<TipoConferencia>(value.Value.Conferencia);
            var times = _calculoTimeAppService.CalcularTime(timeCalculo).ToList();

            ViewBag.dataSource = times;

            var datasource = times;

            return Json(datasource);
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
            var listaCriterios = new List<string>();
            listaCriterios.Add("Ambas");
            listaCriterios.Add("Leste");
            listaCriterios.Add("Oeste");

            return listaCriterios;
        }

        private IList<string> CarregarCategoria()
        {
            var listaCriterios = new List<string>();
            listaCriterios.Add("Arremessos Convertidos");
            listaCriterios.Add("Arremessos Tentados");
            listaCriterios.Add("Porcentagem Arremessos");
            listaCriterios.Add("Arremessos 3Pontos");
            listaCriterios.Add("Arremessos 3Pontos Tentados");
            listaCriterios.Add("Porcentagem 3Pontos");
            listaCriterios.Add("Arremessos 2Pontos");
            listaCriterios.Add("Arremessos 2Pontos Tentados");
            listaCriterios.Add("Porcentagem 2Pontos");
            listaCriterios.Add("Lances Livres");
            listaCriterios.Add("Lances Livres Tentados");
            listaCriterios.Add("Lances Livres");
            listaCriterios.Add("Rebotes Ofensivos");
            listaCriterios.Add("Rebotes Defensivos");
            listaCriterios.Add("Total Rebotes");
            listaCriterios.Add("Assistencias");
            listaCriterios.Add("Roubos Bola");
            listaCriterios.Add("Tocos");
            listaCriterios.Add("Desperdicios Bola");
            listaCriterios.Add("Faltas");
            listaCriterios.Add("Pontos");

            return listaCriterios;
        }
    }
}