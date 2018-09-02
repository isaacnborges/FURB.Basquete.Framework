using FURB.Basquete.Framework.Domain.Entities;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;

namespace FURB.Basquete.Framework.Domain.Services
{
    public class JogadorService : ServiceBase<Jogador>, IJogadorService
    {
        private readonly IJogadorRepository _jogadorRepository;
        public JogadorService(IJogadorRepository jogadorRepository) : base(jogadorRepository)
        {
            _jogadorRepository = jogadorRepository;
        }

        public Jogador BuscarPorNome(string nome)
        {
            return _jogadorRepository.Find(x => x.Nome == nome);
        }
    }
}
