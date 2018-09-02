using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Models
{
    public class TimeEstatistica
    {
        public Guid Time_ID { get; set; }
        public EstatisticaPer36 EstatisticaTime { get; set; }
        public EstatisticaPer36 EstatisticaOponenteTime { get; set; }
    }
}
