using System;

namespace FURB.Basquete.Framework.Domain.Interfaces
{
    public interface IEntity
    {
        Guid Id { get; set; }
        bool IsNew { get; }
    }
}
