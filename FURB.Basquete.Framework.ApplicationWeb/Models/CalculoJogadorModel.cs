namespace FURB.Basquete.Framework.ApplicationWeb.Models
{
    public class CalculoJogadorModel : CalculoBaseModel
    {
        public string Posicao { get; set; }
        public string CategoriaAvancada { get; set; }
        public bool FiltrarJogadores { get; set; }
        public int? QuantidadeJogos { get; set; }
    }
}
