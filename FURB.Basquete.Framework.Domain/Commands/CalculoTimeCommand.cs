using FURB.Basquete.Framework.Domain.Enum;

namespace FURB.Basquete.Framework.Domain.Commands
{
    public class CalculoTimeCommand : CalculoBaseCommand
    {
        public TipoConferencia Conferencia { get; set; }        
    }
}
