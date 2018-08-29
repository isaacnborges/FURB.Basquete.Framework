using FURB.Basquete.Framework.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Entities
{
    public abstract class Entity : IEntity
    {
        public Guid Id { get; set; }
        public bool IsNew => Id == null || Id == Guid.Empty;

        public Entity()
        {
            Id = Guid.NewGuid();
        }

        public override string ToString()
        {
            return GetType().Name + " [Id=" + Id + "]";
        }
    }
}
