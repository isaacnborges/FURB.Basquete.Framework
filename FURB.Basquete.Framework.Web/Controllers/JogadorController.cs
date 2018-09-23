using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace FURB.Basquete.Framework.Web.Controllers
{
    public class JogadorController : Controller
    {
        private readonly IJogadorAppService _jogadorAppService;
        private readonly ITemporadaJogadorAppService _temporadaJogadorAppService;
        private readonly ICalculoJogadorService _calculoJogadorService;

        public JogadorController(IJogadorAppService jogadorAppService, ITemporadaJogadorAppService temporadaJogadorAppService, 
                                 ICalculoJogadorService calculoJogadorService)
        {
            _jogadorAppService = jogadorAppService;
            _temporadaJogadorAppService = temporadaJogadorAppService;
            _calculoJogadorService = calculoJogadorService;
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

            //TESTE para chamar o serviço
            var jogadorCalculo = new CalculoJogadorCommand();
            jogadorCalculo.AnoInicio = 2011;
            jogadorCalculo.AnoFim = 2015;
            jogadorCalculo.Categoria = TipoCategoria.Pontos;
            jogadorCalculo.Criterio = TipoCriterio.EstatisticaPer36Minutes;
            jogadorCalculo.TipoCalculo = TipoCalculo.MediaAnual;
            jogadorCalculo.Posicao = TipoPosicao.SF;
            jogadorCalculo.MediaIsolada = true;
            var tt = _calculoJogadorService.CalcularJogador(jogadorCalculo);

            //TESTE para chamar o serviço
            var jogadorCalculo2 = new CalculoJogadorCommand();
            jogadorCalculo2.AnoInicio = 2016;
            jogadorCalculo2.AnoFim = 2018;
            jogadorCalculo2.CategoriaAvancada = TipoCategoriaAvancada.EficienciaJogador;
            jogadorCalculo2.Criterio = TipoCriterio.EstatisticaAvancada;
            jogadorCalculo2.TipoCalculo = TipoCalculo.MediaAnual;
            jogadorCalculo2.Posicao = TipoPosicao.SF;
            jogadorCalculo2.MediaIsolada = true;
            var tt2 = _calculoJogadorService.CalcularJogador(jogadorCalculo2);

            var jogador3 = _jogadorAppService.GetAll().FirstOrDefault(x => x.Id == id);
            var tt3 = _calculoJogadorService.CalcularJogadorEspecifico(jogador3, 2017, TipoCategoria.Pontos, null);
            var tt4 = _calculoJogadorService.CalcularJogadorEspecifico(jogador3, 2017, null, TipoCategoriaAvancada.EficienciaJogador);

            return View();
        }
    }
}