using FURB.Basquete.Framework.Domain.Commands;
using FURB.Basquete.Framework.Domain.Entities;
using NPOI.SS.UserModel;
using System.Collections.Generic;

namespace FURB.Basquete.Framework.ApplicationService.Interfaces
{
    public interface ITimeAppService : IAppServiceBase<Time>
    {
        IList<TemporadaTimeCommand> ObterTimes(ISheet abaTime, ISheet abaOponente);
    }
}
