using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Enum;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Interfaces
{
    public interface ICalculoJogadorAppService
    {
        IList<CalculoJogadorResponse> CalcularJogador(CalculoJogadorCommand calculoJogador, bool filtrarJogadores, int? qtdJogos);
        CalculoJogadorEspecificoCommand CalcularJogadorEspecifico(Jogador jogador, int anoBase, TipoCategoria? categoria,
            TipoCategoriaAvancada? categoriaAvancada, bool filtrarJogadores, int? qtdJogos);
    }
}
