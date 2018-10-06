using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class CalculoJogadorAppService : ICalculoJogadorAppService
    {
        private readonly ICalculoJogadorService _calculoJogadorService;

        public CalculoJogadorAppService(ICalculoJogadorService calculoJogadorService)
        {
            this._calculoJogadorService = calculoJogadorService;
        }

        public IList<CalculoJogadorResponse> CalcularJogador(CalculoJogadorCommand calculoJogador, bool filtrarJogadores, int? qtdJogos)
        {
            return _calculoJogadorService.CalcularJogador(calculoJogador, filtrarJogadores, qtdJogos);
        }

        public CalculoJogadorEspecificoResponse CalcularJogadorEspecifico(Jogador jogador, int anoBase, TipoCategoria? categoria, TipoCategoriaAvancada? categoriaAvancada, bool filtrarJogadores, int? qtdJogos)
        {
            return _calculoJogadorService.CalcularJogadorEspecifico(jogador, anoBase, categoria, categoriaAvancada, filtrarJogadores, qtdJogos);
        }
    }
}
