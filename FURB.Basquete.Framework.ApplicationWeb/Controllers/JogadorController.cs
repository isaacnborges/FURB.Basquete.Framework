﻿using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.ApplicationWeb.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.ApplicationWeb.Controllers
{
    public class JogadorController : Controller
    {
        private readonly IJogadorAppService _jogadorAppService;
        private readonly ITemporadaJogadorAppService _temporadaJogadorAppService;

        public JogadorController(IJogadorAppService jogadorAppService, ITemporadaJogadorAppService temporadaJogadorAppService)
        {
            _jogadorAppService = jogadorAppService;
            _temporadaJogadorAppService = temporadaJogadorAppService;
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
                var jogadores = _jogadorAppService.GetAll();
                var result = jogadores.Select(x => JogadorViewModel.ToViewModel(x));
                var customerData = result;

                sortColumn = sortColumn.Equals("Id") || string.IsNullOrEmpty(sortColumn) ? "Nome" : sortColumn;
                var prop = GetProperty(sortColumn);
                if (sortColumnDirection == "asc")
                {
                    customerData = customerData.OrderBy(prop.GetValue);
                }
                else
                    customerData = customerData.OrderByDescending(prop.GetValue);

                //Search  
                if (!string.IsNullOrEmpty(searchValue))
                {
                    customerData = customerData.Where(m => m.Nome.ToLower().Contains(searchValue));
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

        private PropertyInfo GetProperty(string name)
        {
            var properties = typeof(JogadorViewModel).GetProperties();
            PropertyInfo prop = null;
            foreach (var item in properties)
            {
                if (item.Name.ToLower().Equals(name.ToLower()))
                {
                    prop = item;
                    break;
                }
            }
            return prop;
        }

        public IActionResult Details(Guid id)
        {
            var temporadaTime = _temporadaJogadorAppService.ObterEstatisticaJogador(id);

            ViewBag.Jogador = temporadaTime.Jogador;
            ViewBag.EstatisticaPer36 = temporadaTime.Estatisticas.Select(x => x.EstatisticaPer36);
            ViewBag.EstatisticaAvancada = temporadaTime.Estatisticas.Select(x => x.EstatisticaAvancada);

            return View();
        }
    }
}
