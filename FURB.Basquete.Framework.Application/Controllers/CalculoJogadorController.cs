using FURB.Basquete.Framework.Application.Models;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Navigations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FURB.Basquete.Framework.Application.Controllers
{
    public class CalculoJogadorController : Controller
    {
        private readonly ICalculoJogadorAppService _calculoJogadorAppService;
        private readonly IJogadorAppService _jogadorAppService;

        public CalculoJogadorController(ICalculoJogadorAppService calculoJogadorAppService, IJogadorAppService jogadorAppService)
        {
            _calculoJogadorAppService = calculoJogadorAppService;
            _jogadorAppService = jogadorAppService;
        }

        public IActionResult Index()
        {
            ViewBag.Criterio = CarregarCriterios();
            ViewBag.Posicao = CarregarPosicao();
            ViewBag.Categoria = CarregarCategoria();
            ViewBag.CategoriaAvancada = CarregarCategoriaAvancada();
            ViewBag.Jogadores = CarregarJogadores();

            ViewBag.CalculoMedia = new TabHeader { Text = "Calculo Média" };
            ViewBag.JogadorEspecifico = new TabHeader { Text = "Jogador Específico" };

            return View();
        }

        public ActionResult Calcular([FromBody]ModelRequest<CalculoJogadorModel> jogadorCommand)
        {
            CalculoJogadorCommand jogadorCalculo = new CalculoJogadorCommand();

            if (jogadorCommand.Value.TipoCalculo.Equals("media", StringComparison.InvariantCultureIgnoreCase))
            {
                jogadorCalculo.TipoCalculo = TipoCalculo.MediaAnual;
                jogadorCalculo.AnoInicio = jogadorCommand.Value.AnoInicio;
                jogadorCalculo.AnoFim = jogadorCommand.Value.AnoFim;
            }
            else
            {
                jogadorCalculo.TipoCalculo = TipoCalculo.Media3Anos;
                jogadorCalculo.AnoInicio = jogadorCommand.Value.AnoBase - 1;
                jogadorCalculo.AnoFim = jogadorCommand.Value.AnoBase + 1;
            }
            
            jogadorCalculo.Criterio = jogadorCommand.Value.Criterio.Replace(" ", "") == "Por36minutos" ? TipoCriterio.EstatisticaPer36Minutes : TipoCriterio.EstatisticaAvancada;

            if (jogadorCalculo.Criterio == TipoCriterio.EstatisticaPer36Minutes)
                jogadorCalculo.Categoria = EnumUtil.ParseEnum<TipoCategoria>(jogadorCommand.Value.Categoria.Replace(" ", ""));
            else
                jogadorCalculo.CategoriaAvancada = EnumUtil.ParseEnum<TipoCategoriaAvancada>(jogadorCommand.Value.CategoriaAvancada.Replace(" ", ""));

            jogadorCalculo.Posicao = EnumUtil.ParseEnum<TipoPosicao>(jogadorCommand.Value.Posicao);
            bool filtrarJogadores = jogadorCommand.Value.FiltrarJogadores;
            var jogos = jogadorCommand.Value.QuantidadeJogos;
            
            var jogadores = _calculoJogadorAppService.CalcularJogador(jogadorCalculo, filtrarJogadores, jogos).ToList();
            var datasource = jogadores;
            ViewBag.dataSource = jogadores;

            return Json(datasource);
        }

        public ActionResult CalcularJogador([FromBody]ModelRequest<CalculoJogadorEspecificoModel> jogadorCommand)
        {
            var anoBase = jogadorCommand.Value.AnoBase;
            var jogador = _jogadorAppService.GetAll().FirstOrDefault(x => x.Nome == jogadorCommand.Value.NomeJogador);
            var tipoCriterio = jogadorCommand.Value.Criterio.Replace(" ", "") == "Por36minutos" ? TipoCriterio.EstatisticaPer36Minutes : TipoCriterio.EstatisticaAvancada;
            bool filtrarJogadores = jogadorCommand.Value.FiltrarJogadores;
            var jogos = jogadorCommand.Value.QuantidadeJogos;

            var jogadores = new CalculoJogadorEspecificoResponse();
            if (tipoCriterio == TipoCriterio.EstatisticaPer36Minutes)
            {
                jogadores = _calculoJogadorAppService.CalcularJogadorEspecifico(jogador, anoBase, TipoCriterio.EstatisticaPer36Minutes, filtrarJogadores, jogos);
            }
            else
            {
                jogadores = _calculoJogadorAppService.CalcularJogadorEspecifico(jogador, anoBase, TipoCriterio.EstatisticaAvancada, filtrarJogadores, jogos);
            }
                
            var datasource = jogadores;
            ViewBag.dataSource = jogadores;

            return Json(datasource);
        }

        private IList<string> CarregarJogadores()
        {
            return _jogadorAppService.GetAll().OrderBy(x => x.Nome).Select(x => x.Nome).ToList();
        }

        private IList<string> CarregarCriterios()
        {
            var listaCriterios = new List<string>();
            listaCriterios.Add("Por 36 minutos");
            listaCriterios.Add("Estatísticas Avançadas");

            return listaCriterios;
        }

        private IList<string> CarregarPosicao()
        {
            var listaPosicao = new List<string>();
            listaPosicao.Add("PG");
            listaPosicao.Add("SG");
            listaPosicao.Add("SF");
            listaPosicao.Add("PF");
            listaPosicao.Add("C");

            return listaPosicao;
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

        private IList<string> CarregarCategoriaAvancada()
        {
            var listaCategoriaAvancada = new List<string>();
            listaCategoriaAvancada.Add("Eficiencia Jogador");
            listaCategoriaAvancada.Add("Porcentagem Arremessos Eficientes");
            listaCategoriaAvancada.Add("Taxa Tentativas 3 Pontos");
            listaCategoriaAvancada.Add("Taxa Tentativas Lances Livres");
            listaCategoriaAvancada.Add("Porcentagem Rebotes Ofensivos");
            listaCategoriaAvancada.Add("Porcentagem Rebotes Defensivos");
            listaCategoriaAvancada.Add("Porcentagem Rebotes Total");
            listaCategoriaAvancada.Add("Porcentagem Assistencias");
            listaCategoriaAvancada.Add("Porcentagem Roubos Bola");
            listaCategoriaAvancada.Add("Porcentagem Tocos");
            listaCategoriaAvancada.Add("Porcentagem Desperdicios Bola");
            listaCategoriaAvancada.Add("Porcentagem Uso Jogador");
            listaCategoriaAvancada.Add("Contribuicao Vitoria Ofensiva");
            listaCategoriaAvancada.Add("Contribuicao Vitoria Defensiva");
            listaCategoriaAvancada.Add("Contribuicao Vitoria");
            listaCategoriaAvancada.Add("Estimativa Contribuicao Ofensiva");
            listaCategoriaAvancada.Add("Estimativa Contribuicao Defensiva");
            listaCategoriaAvancada.Add("Estimativa Contribuicao Total");

            return listaCategoriaAvancada.OrderBy(x => x).ToList();
        }
    }
}