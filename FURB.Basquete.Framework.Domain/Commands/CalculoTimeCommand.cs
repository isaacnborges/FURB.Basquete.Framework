﻿using FURB.Basquete.Framework.Domain.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class CalculoTimeCommand : CalculoBaseCommand
    {
        public TipoConferencia Conferencia { get; set; }        
    }
}
