using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Response;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ICalculoBaseService<TCommand, TResponse> 
        where TCommand : CommandBase
        where TResponse : ResponseBase
    {
        IList<TResponse> CalcularTime(TCommand calculoTime);
    }
}
