using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.ApplicationService.Services
{
    public class TesteAppService : AppServiceBase<Time>, ITimeAppService
    {
        public TesteAppService(IServiceBase<Time> service) : base(service)
        {
            int aa = 2;
        }
    }
}
