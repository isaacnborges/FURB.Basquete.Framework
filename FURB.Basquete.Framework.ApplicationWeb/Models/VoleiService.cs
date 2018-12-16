using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Services;

namespace FURB.Basquete.Framework.ApplicationWeb.Models
{
    public class VoleiService : ServiceBase<Volei>, IVoleiService
    {
        public VoleiService(IRepositoryBase<Volei> repository) : base(repository)
        {
        }

        public void AdicionarTime()
        {
            var volei = new Volei();
            this.AddAsync(volei);
        }
    }
}
