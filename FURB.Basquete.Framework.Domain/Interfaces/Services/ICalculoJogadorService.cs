using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Response.Calculo;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ICalculoJogadorService
    {
        IList<CalculoJogadorResponse> CalcularJogador(CalculoJogadorCommand calculoJogador);
    }
}
