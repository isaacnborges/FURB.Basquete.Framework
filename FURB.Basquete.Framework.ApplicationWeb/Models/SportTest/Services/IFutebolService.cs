using FURB.Basquete.Framework.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.ApplicationWeb.Models.SportTest.Services
{
    public interface IFutebolService : ICalculoBaseService<FutebolCommand, FutebolResponse>
    {
    }
}
