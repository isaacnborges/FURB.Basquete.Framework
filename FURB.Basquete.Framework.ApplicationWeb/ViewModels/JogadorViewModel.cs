using FURB.Basquete.Framework.Domain.Entities;

namespace FURB.Basquete.Framework.ApplicationWeb.ViewModels
{
    public class JogadorViewModel : ViewModelBase
    {
        public string Nome { get; set; }
        public string Posicao { get; set; }

        public static JogadorViewModel ToViewModel(Jogador jogador)
        {
            return new JogadorViewModel
            {
                Id = jogador.Id,
                Nome = jogador.Nome,
                Posicao = jogador.Posicao
            };
        }
    }
}
