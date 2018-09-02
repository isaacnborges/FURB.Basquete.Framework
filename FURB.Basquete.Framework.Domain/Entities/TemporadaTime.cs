using FURB.Basquete.Framework.Domain.Models;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public class TemporadaTime : Entity
    {
        public int Ano { get; set; }
        public List<TimeEstatistica> Times { get; set; }
    }
}
