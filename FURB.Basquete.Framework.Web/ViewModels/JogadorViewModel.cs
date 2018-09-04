using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FURB.Basquete.Framework.Web.Models
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
