using FURB.Basquete.Framework.Domain.Enum;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class CalculoBaseCommand : CommandBase
    {
        public int AnoInicio { get; set; }
        public int AnoFim { get; set; }
        public TipoCalculo TipoCalculo { get; set; }
        public TipoCriterio Criterio { get; set; }
        public TipoCategoria? Categoria { get; set; }
        public bool MediaIsolada { get; set; }
    }
}
