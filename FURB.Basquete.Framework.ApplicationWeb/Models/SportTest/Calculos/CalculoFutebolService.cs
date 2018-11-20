using FURB.Basquete.Framework.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationWeb.Models.SportTest
{
    public class CalculoFutebolService : ICalculoBaseService<FutebolCommand, FutebolResponse>
    {
        public IList<FutebolResponse> CalcularTime(FutebolCommand calculoTime)
        {
            throw new NotImplementedException();
        }
    }
}
