using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class TimeEstatistica
    {
        public Guid Time_ID { get; set; }
        public ICollection<EstatisticaPer36> EstatsticaPer36 { get; set; }
        public ICollection<EstatisticaAvancada> EstatsticaAvancada { get; set; }
    }
}
