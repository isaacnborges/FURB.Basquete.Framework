using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Services;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class JogadorAppService : AppServiceBase<Jogador>, IJogadorAppService
    {
        private readonly IJogadorService _jogadorService;

        public JogadorAppService(IJogadorService jogador)
            : base(jogador)
        {
            _jogadorService = jogador;
        }
    }
}
