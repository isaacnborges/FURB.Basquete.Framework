using FURB.Basquete.Framework.Domain.Enum;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class CalculoJogadorCommand : CalculoBaseCommand
    {
        public TipoCategoriaAvancada? CategoriaAvancada { get; set; }
        public TipoPosicao Posicao { get; set; }
    }
}
