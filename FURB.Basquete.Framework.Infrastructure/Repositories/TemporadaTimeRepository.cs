using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Infrastructure.Repositories
{
    public abstract class TemporadaTimeRepositoryImpl : RepositoryBase<TemporadaTime>, IRepositoryBase<TemporadaTime>
    {
        public TemporadaTimeRepositoryImpl(IConnect connect) : base(connect)
        {
        }
    }

    public class TemporadaTimeRepository : TemporadaTimeRepositoryImpl
    {
        public TemporadaTimeRepository(IConnect connect) : base(connect)
        {
        }
    }
}
