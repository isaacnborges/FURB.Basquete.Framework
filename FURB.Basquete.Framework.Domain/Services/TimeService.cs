using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class TimeService : ServiceBase<Time>, ITimeService
    {
        private readonly ITimeRepository _timeRepository;
        public TimeService(ITimeRepository timeRepository) : base(timeRepository)
        {
            _timeRepository = timeRepository;
        }

        public Time BuscarPorNome(string nome)
        {
            return _timeRepository.Find(x => x.Nome == nome);
        }
    }
}
