using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Services;

namespace FURB.Basquete.Framework.ApplicationWeb.Models
{
    public class FuteboService : ServiceBase<Futebol>, IJogadorFutebolService<Futebol>
    {
        public FuteboService(IRepositoryBase<Futebol> repository) : base(repository)
        {
        }

        public void AdicionarGols(int gols)
        {
            throw new System.NotImplementedException();
        }

        public void BuscarJogadorMaisAlto()
        {
            throw new System.NotImplementedException();
        }
    }
}
