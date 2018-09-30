using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Response;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Interfaces
{
    public interface ICalculoTimeAppService
    {
        IList<CalculoTimeResponse> CalcularTime(CalculoTimeCommand calculoTime);
    }
}
