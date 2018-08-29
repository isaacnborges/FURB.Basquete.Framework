using FURB.Basquete.Framework.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public class TemporadaTime : Entity
    {
        public int Ano { get; set; }
        public IList<TimeEstatistica> Times { get; set; }
    }
}
