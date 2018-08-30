using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Infrastructure.Interfaces;

namespace FURB.Basquete.Framework.Infrastructure.Repositories
{
    public class TemporadaTimeRepository : RepositoryBase<TemporadaTime>, ITemporadaTimeRepository
    {
        public TemporadaTimeRepository(IConnect connect) : base(connect)
        {
        }
    }
}
