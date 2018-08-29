using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Infrastructure.Repositories
{
    public abstract class JogadorRepositoryImpl : RepositoryBase<Jogador>, IRepositoryBase<Jogador>
    {
        public JogadorRepositoryImpl(IConnect connect) : base(connect)
        {
        }
    }

    public class JogadorRepository : JogadorRepositoryImpl
    {
        public JogadorRepository(IConnect connect) : base(connect)
        {
        }
    }
}
