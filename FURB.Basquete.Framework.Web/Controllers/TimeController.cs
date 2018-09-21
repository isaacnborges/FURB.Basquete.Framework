using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Web.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace FURB.Basquete.Framework.Web.Controllers
{
    public class TimeController : Controller
    {
        private readonly ITimeAppService _timeAppService;
        private readonly ITemporadaTimeAppService _temporataTimeAppService;
        private readonly ICalculoTimeService _calculoTimeService;

        public TimeController(ITimeAppService timeAppService, ITemporadaTimeAppService temporataTimeAppService, ICalculoTimeService calculoTimeService)
        {
            _timeAppService = timeAppService;
            _temporataTimeAppService = temporataTimeAppService;
            _calculoTimeService = calculoTimeService;
        }

        public IActionResult Index()
        {
            var times = _timeAppService.GetAll();
            var result = times.Select(x => TimeViewModel.ToViewModel(x)).OrderBy(x => x.Nome).ToList();

            return View(result);
        }

        public IActionResult Details(Guid id)
        {
            var temporadaTime = _temporataTimeAppService.ObterEstatisticaTime(id);

            ViewBag.Time = temporadaTime.Time;
            ViewBag.EstatisticaTime = temporadaTime.Estatisticas.Select(x => x.EstatisticaTime);
            ViewBag.EstatisticaOponenteTime = temporadaTime.Estatisticas.Select(x => x.EstatisticaOponenteTime);


            //TESTE para chamar o serviço
            CalculoTimeCommand timeCalculo = new CalculoTimeCommand();
            timeCalculo.AnoInicio = 2015;
            timeCalculo.AnoFim = 2017;
            timeCalculo.Categoria = TipoCategoria.Pontos;
            timeCalculo.Criterio = TipoCriterio.EstatisticaPer36Minutes;
            timeCalculo.TipoCalculo = TipoCalculo.Media3Anos;
            timeCalculo.Conferencia = TipoConferencia.Oeste;
            timeCalculo.MediaIsolada = true;
            _calculoTimeService.CalcularTime(timeCalculo);

            return View();
        }
    }
}