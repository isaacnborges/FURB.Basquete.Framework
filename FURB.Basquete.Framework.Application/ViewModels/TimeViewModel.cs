using FURB.Basquete.Framework.Domain.Entities;

namespace FURB.Basquete.Framework.Application.ViewModels
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
