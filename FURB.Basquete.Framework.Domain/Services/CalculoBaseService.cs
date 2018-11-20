using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Response;

namespace FURB.Basquete.Framework.Domain.Services
{
    public abstract class CalculoBaseService<TCommand, TResponse> 
        where TCommand : CommandBase
        where TResponse : ResponseBase
    {
    }
}
