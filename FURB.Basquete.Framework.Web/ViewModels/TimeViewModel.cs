using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Web.Models
{
    public class TimeViewModel : ViewModelBase
    {
        public string Nome { get; set; }
        public string Sigla { get; set; }
        public string Conferencia { get; set; }

        public static TimeViewModel ToViewModel(Time time)
        {
            return new TimeViewModel
            {
                Id = time.Id,
                Nome = time.Nome,
                Sigla = time.Sigla,
                Conferencia = time.Conferencia
            };
        }
    }
}
