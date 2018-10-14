using FURB.Basquete.Framework.Application.Models;
using FURB.Basquete.Framework.Application.ViewModels;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace FURB.Basquete.Framework.Application.Controllers
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
            return View();
        }

        public IActionResult Load()
        {
            try
            {
                var draw = HttpContext.Request.Form["draw"].FirstOrDefault();
                // Skiping number of Rows count  
                var start = Request.Form["start"].FirstOrDefault();
                // Paging Length 10,20  
                var length = Request.Form["length"].FirstOrDefault();
                // Sort Column Name  
                var sortColumn = Request.Form["columns[" + Request.Form["order[0][column]"].FirstOrDefault() + "][name]"].FirstOrDefault();
                // Sort Column Direction ( asc ,desc)  
                var sortColumnDirection = Request.Form["order[0][dir]"].FirstOrDefault();
                // Search Value from (Search box)  
                var searchValue = Request.Form["search[value]"].FirstOrDefault().ToLower();

                //Paging Size (10,20,50,100)  
                int pageSize = length != null ? Convert.ToInt32(length) : 0;
                int skip = start != null ? Convert.ToInt32(start) : 0;
                int recordsTotal = 0;

                // Getting all Customer data  
                var times = _timeAppService.GetAll();
                var result = times.Select(x => TimeViewModel.ToViewModel(x));
                var customerData = result;

                sortColumn = sortColumn.Equals("Id") || string.IsNullOrEmpty(sortColumn) ? "Nome" : sortColumn;
                var prop = ClassUtil.GetProperty<TimeViewModel>(sortColumn);
                if (sortColumnDirection == "asc")
                {
                    customerData = customerData.OrderBy(prop.GetValue);
                }
                else
                    customerData = customerData.OrderByDescending(prop.GetValue);

                //Search  
                if (!string.IsNullOrEmpty(searchValue))
                {
                    customerData = customerData.Where(m => m.Nome.ToLower().Contains(searchValue) || m.Sigla.ToLower().Contains(searchValue));
                }

                //total number of rows count   
                recordsTotal = customerData.Count();
                //Paging   
                var data = customerData.Skip(skip).Take(pageSize).ToList();
                //Returning Json Data  
                return Json(new { draw, recordsFiltered = recordsTotal, recordsTotal, data });

            }
            catch (Exception)
            {
                throw;
            }
        }

        public IActionResult Details(Guid id)
        {
            var temporadaTime = _temporataTimeAppService.ObterEstatisticaTime(id);

            ViewBag.Time = temporadaTime.Time;
            ViewBag.EstatisticaTime = temporadaTime.Estatisticas.Select(x => x.EstatisticaTime);
            ViewBag.EstatisticaOponenteTime = temporadaTime.Estatisticas.Select(x => x.EstatisticaOponenteTime);


            //TESTE para chamar o serviço
            CalculoTimeCommand timeCalculo = new CalculoTimeCommand();
            timeCalculo.AnoInicio = 2002;
            timeCalculo.AnoFim = 2006;
            timeCalculo.Categoria = TipoCategoria.Tocos;
            timeCalculo.Criterio = TipoCriterio.EstatisticaPer36Minutes;
            timeCalculo.TipoCalculo = TipoCalculo.MediaAnual;
            timeCalculo.Conferencia = TipoConferencia.Ambas;
            timeCalculo.MediaIsolada = true;
            //var tt = _calculoTimeService.CalcularTime(timeCalculo);

            return View();
        }
    }
}