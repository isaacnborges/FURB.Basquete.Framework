using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Infrastructure.Interfaces;

namespace FURB.Basquete.Framework.Infrastructure.Repositories
{
    public abstract class TemporadaJogadorRepositoryImpl : RepositoryBase<TemporadaJogador>, IRepositoryBase<TemporadaJogador>
    {
        public TemporadaJogadorRepositoryImpl(IConnect connect) : base(connect)
        {
        }
    }

    public class TemporadaJogadorRepository : JogadorRepositoryImpl
    {
        public TemporadaJogadorRepository(IConnect connect) : base(connect)
        {
        }
    }
}
