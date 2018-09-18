using FURB.Basquete.Framework.Domain.Commands;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ICalculoTimeService
    {
        void CalcularTime(CalculoTimeCommand calculoTime);
    }
}
