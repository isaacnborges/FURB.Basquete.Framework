using System.Collections.Generic;
using FURB.Basquete.Framework.Domain.Commands;
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

        public void AdicionarTimes(IList<TemporadaTimeCommand> times)
        {
            foreach (var t in times)
            {
                var tt = BuscarPorNome(t.Nome);

                if (tt != null && string.IsNullOrEmpty(tt.Sigla))
                {
                    tt.Sigla = t.Sigla;
                    tt.Conferencia = t.Conferencia;
                    Edit(x => x.Id == tt.Id, tt);
                    continue;
                }

                if (tt != null)
                {
                    continue;
                }

                var time = new Time();
                time.Nome = t.Nome;
                time.Sigla = t.Sigla;
                time.Conferencia = t.Conferencia;
                Add(time);
            }
        }

        public Time BuscarPorNome(string nome)
        {
            return _timeRepository.Find(x => x.Nome == nome);
        }
    }
}
