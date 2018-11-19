namespace FURB.Basquete.Framework.Domain.Interfaces.Services
{
    public interface IJogadorFutebolService<TEntity> : IServiceBase<TEntity> where TEntity : class, IEntity
    {
        void BuscarJogadorMaisAlto();
        void AdicionarGols(int gols);
    }
}
