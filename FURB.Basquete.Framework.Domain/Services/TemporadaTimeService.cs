using System.Collections.Generic;
using System.Linq;
using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Models;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class TemporadaTimeService : ServiceBase<TemporadaTime>, ITemporadaTimeService
    {
        private readonly ITemporadaTimeRepository _temporadaTimeRepository;
        private readonly ITimeService _timeService;

        public TemporadaTimeService(ITemporadaTimeRepository temporadaTimeRepository,
                                    ITimeService timeService)
            : base(temporadaTimeRepository)
        {
            _temporadaTimeRepository = temporadaTimeRepository;
            _timeService = timeService;
        }

        public void AdicionarTemporadaTimes(IList<TemporadaTimeCommand> times)
        {            
            //Adicionar Time
            foreach (var t in times)
            {
                if (_timeService.BuscarPorNome(t.Nome) != null)
                {
                    continue;
                }

                var time = new Time();
                time.Nome = t.Nome;
                time.Sigla = t.Sigla;
                time.Conferencia = t.Conferencia;
                _timeService.Add(time);
            }

            //obter registro com o ano
            var anoBase = times.FirstOrDefault().Ano;
            var existeTemporada = _temporadaTimeRepository.GetAll().Any(x => x.Ano == anoBase);
            if (existeTemporada)
            {
                _temporadaTimeRepository.Delete(x => x.Ano == anoBase);
            }

            var temporadaTime = new TemporadaTime();
            var timesTemporada = new List<TimeEstatistica>();
            //Adicionar Temporada Time
            foreach (var t in times)
            {
                var timeAdicionado = _timeService.BuscarPorNome(t.Nome);                
                var timeEstatistica = new TimeEstatistica();

                timeEstatistica.Time_ID = timeAdicionado.Id;
                timeEstatistica.EstatisticaTime = t.EstatisticaTime;
                timeEstatistica.EstatisticaOponenteTime = t.EstatisticaOponenteTime;

                temporadaTime.Ano = t.Ano;
                timesTemporada.Add(timeEstatistica);
            }

            temporadaTime.Times = timesTemporada;
            Add(temporadaTime);
        }
    }
}
