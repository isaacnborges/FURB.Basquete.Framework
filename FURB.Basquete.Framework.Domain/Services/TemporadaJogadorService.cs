using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class TemporadaJogadorService : ServiceBase<TemporadaJogador>, ITemporadaJogadorService
    {
        private readonly ITemporadaJogadorRepository _temporadaJogadorRepository;
        public TemporadaJogadorService(ITemporadaJogadorRepository temporadaJogadorRepository) : base(temporadaJogadorRepository)
        {
            _temporadaJogadorRepository = temporadaJogadorRepository;
        }
    }
}
