using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace FURB.Basquete.Framework.Web.Controllers
{
    public class JogadorController : Controller
    {
        private readonly IJogadorAppService _jogadorAppService;

        public JogadorController(IJogadorAppService jogadorAppService)
        {
            this._jogadorAppService = jogadorAppService;
        }

        public IActionResult Index()
        {
            var jogadores = _jogadorAppService.GetAll();
            var result = jogadores.Select(x => JogadorViewModel.ToViewModel(x)).OrderBy(x => x.Nome).ToList();

            return View(result);
        }
    }
}