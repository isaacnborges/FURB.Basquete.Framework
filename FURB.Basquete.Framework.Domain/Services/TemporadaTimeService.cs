using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class TemporadaTimeService : ServiceBase<TemporadaTime>, ITemporadaTimeService
    {
        private readonly ITemporadaTimeRepository _temporadaTimeRepository;
        public TemporadaTimeService(ITemporadaTimeRepository temporadaTimeRepository) : base(temporadaTimeRepository)
        {
            _temporadaTimeRepository = temporadaTimeRepository;
        }
    }
}
