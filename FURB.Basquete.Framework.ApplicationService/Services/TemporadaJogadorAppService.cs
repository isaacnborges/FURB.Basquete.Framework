using System.Collections.Generic;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Services;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class TemporadaJogadorAppService : AppServiceBase<TemporadaJogador>, ITemporadaJogadorAppService
    {
        private readonly ITemporadaJogadorService _temporadaJogadorService;

        public TemporadaJogadorAppService(ITemporadaJogadorService temporadaJogador)
            : base(temporadaJogador)
        {
            _temporadaJogadorService = temporadaJogador;
        }

        public void AdicionarTemporadaJogador(IList<TemporadaJogadorCommand> jogadores)
        {
            _temporadaJogadorService.AdicionarTemporadaJogadores(jogadores);
        }
    }
}
