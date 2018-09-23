﻿using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ICalculoTimeService
    {
        IList<CalculoTimeResponse> CalcularTime(CalculoTimeCommand calculoTime);
    }
}