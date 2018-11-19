namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface ITimeVoleiService<TEntity> : IServiceBase<TEntity> where TEntity : class, IEntity
    {
        TEntity ObterSetsVencidos();
    }
}
