using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Services;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class TimeAppService : AppServiceBase<Time>, ITimeAppService
    {
        private readonly ITimeService _timeService;

        public TimeAppService(ITimeService timeService)
            : base(timeService)
        {
            _timeService = timeService;
        }
    }
}
