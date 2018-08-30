using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Infrastructure.Interfaces;

namespace FURB.Basquete.Framework.Infrastructure.Repositories
{
    public class TimeRepository : RepositoryBase<Time>, ITimeRepository
    {
        public TimeRepository(IConnect connect) : base(connect)
        {
        }
    }
}
