using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Services;
using System;

namespace FURB.Basquete.Framework.ApplicationWeb.Models.SportTest
{
    public class VoleiService : ServiceBase<Volei>, ITimeVoleiService<Volei>
    {
        public VoleiService(IRepositoryBase<Volei> repository) : base(repository)
        {
        }

        public Volei ObterSetsVencidos()
        {
            throw new NotImplementedException();
        }
    }
}
