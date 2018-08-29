using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Infrastructure.Interfaces;

namespace FURB.Basquete.Framework.Infrastructure.Repositories
{

    public abstract class TimeRepositoryImpl : RepositoryBase<Time>, IRepositoryBase<Time>
    {
        public TimeRepositoryImpl(IConnect connect) : base(connect)
        {
        }
    }

    public class TimeRepository : TimeRepositoryImpl
    {
        public TimeRepository(IConnect connect) : base(connect)
        {
        }
    }
}
