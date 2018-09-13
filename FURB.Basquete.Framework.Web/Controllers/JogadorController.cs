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
        private readonly ITemporadaJogadorAppService _temporadaJogadorAppService;

        public JogadorController(IJogadorAppService jogadorAppService, ITemporadaJogadorAppService temporadaJogadorAppService)
        {
            _jogadorAppService = jogadorAppService;
            _temporadaJogadorAppService = temporadaJogadorAppService;
        }

        public IActionResult Index()
        {
            var jogadores = _jogadorAppService.GetAll();
            var result = jogadores.Select(x => JogadorViewModel.ToViewModel(x)).OrderBy(x => x.Nome).ToList();

            return View(result);
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