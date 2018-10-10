using FURB.Basquete.Framework.Application.Models;
using FURB.Basquete.Framework.Application.Models.Graficos;
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
            bool filtrarJogadores = jogadorCommand.Value.FiltrarJogadores;
            var jogos = jogadorCommand.Value.QuantidadeJogos;
            var jogadores = new CalculoJogadorEspecificoResponse();

            jogadores = _calculoJogadorAppService.CalcularJogadorEspecifico(jogador, anoBase, TipoCriterio.EstatisticaAvancada, filtrarJogadores, jogos);

            List<ChartData> dadosJogador = new List<ChartData>();
            dadosJogador.Add(new ChartData { X = "EJ", Y = jogadores.EstatisticaAvancadaJogador.EficienciaJogador });
            dadosJogador.Add(new ChartData { X = "AE %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemArremessosEficientes});
            dadosJogador.Add(new ChartData { X = "TT3", Y = jogadores.EstatisticaAvancadaJogador.TaxaTentativas3Pontos });
            dadosJogador.Add(new ChartData { X = "TTLL", Y = jogadores.EstatisticaAvancadaJogador.TaxaTentativasLancesLivres });
            dadosJogador.Add(new ChartData { X = "RO %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemRebotesOfensivos });
            dadosJogador.Add(new ChartData { X = "RD %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemRebotesDefensivos });
            dadosJogador.Add(new ChartData { X = "TR %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemRebotesTotal });
            dadosJogador.Add(new ChartData { X = "A %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemAssistencias });
            dadosJogador.Add(new ChartData { X = "RB %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemRoubosBola });
            dadosJogador.Add(new ChartData { X = "TCS %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemTocos });
            dadosJogador.Add(new ChartData { X = "DB %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemDesperdiciosBola });
            dadosJogador.Add(new ChartData { X = "US %", Y = jogadores.EstatisticaAvancadaJogador.PorcentagemUsoJogador });
            dadosJogador.Add(new ChartData { X = "CVO", Y = jogadores.EstatisticaAvancadaJogador.ContribuicaoVitoriaOfensiva });
            dadosJogador.Add(new ChartData { X = "CVD", Y = jogadores.EstatisticaAvancadaJogador.ContribuicaoVitoriaDefensiva });
            dadosJogador.Add(new ChartData { X = "CV", Y = jogadores.EstatisticaAvancadaJogador.ContribuicaoVitoria });
            dadosJogador.Add(new ChartData { X = "ECO", Y = jogadores.EstatisticaAvancadaJogador.EstimativaContribuicaoOfensiva });
            dadosJogador.Add(new ChartData { X = "ECD", Y = jogadores.EstatisticaAvancadaJogador.EstimativaContribuicaoDefensiva });
            dadosJogador.Add(new ChartData { X = "ECT", Y = jogadores.EstatisticaAvancadaJogador.EstimativaContribuicaoTotal });

            List<Data> dadosMedia = new List<Data>();
            dadosMedia.Add(new Data { X = "EJ", Y2 = jogadores.EstatisticaAvancadaMedia.EficienciaJogador });
            dadosMedia.Add(new Data { X = "AE %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemArremessosEficientes });
            dadosMedia.Add(new Data { X = "TT3", Y2 = jogadores.EstatisticaAvancadaMedia.TaxaTentativas3Pontos });
            dadosMedia.Add(new Data { X = "TTLL", Y2 = jogadores.EstatisticaAvancadaMedia.TaxaTentativasLancesLivres });
            dadosMedia.Add(new Data { X = "RO %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemRebotesOfensivos });
            dadosMedia.Add(new Data { X = "RD %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemRebotesDefensivos });
            dadosMedia.Add(new Data { X = "TR %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemRebotesTotal });
            dadosMedia.Add(new Data { X = "A %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemAssistencias });
            dadosMedia.Add(new Data { X = "RB %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemRoubosBola });
            dadosMedia.Add(new Data { X = "TCS %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemTocos });
            dadosMedia.Add(new Data { X = "DB %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemDesperdiciosBola });
            dadosMedia.Add(new Data { X = "US %", Y2 = jogadores.EstatisticaAvancadaMedia.PorcentagemUsoJogador });
            dadosMedia.Add(new Data { X = "CVO", Y2 = jogadores.EstatisticaAvancadaMedia.ContribuicaoVitoriaOfensiva });
            dadosMedia.Add(new Data { X = "CVD", Y2 = jogadores.EstatisticaAvancadaMedia.ContribuicaoVitoriaDefensiva });
            dadosMedia.Add(new Data { X = "CV", Y2 = jogadores.EstatisticaAvancadaMedia.ContribuicaoVitoria });
            dadosMedia.Add(new Data { X = "ECO", Y2 = jogadores.EstatisticaAvancadaMedia.EstimativaContribuicaoOfensiva });
            dadosMedia.Add(new Data { X = "ECD", Y2 = jogadores.EstatisticaAvancadaMedia.EstimativaContribuicaoDefensiva });
            dadosMedia.Add(new Data { X = "ECT", Y2 = jogadores.EstatisticaAvancadaMedia.EstimativaContribuicaoTotal });

            DataSource dataSource = new DataSource();

            dataSource.Dados.Add(dadosJogador);
            dataSource.Dados.Add(dadosMedia);

            return Json(dataSource);
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