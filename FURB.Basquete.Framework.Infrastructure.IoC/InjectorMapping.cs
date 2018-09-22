using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.ApplicationService.Services;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Services;
using FURB.Basquete.Framework.Infrastructure.Data;
using FURB.Basquete.Framework.Infrastructure.Interfaces;
using FURB.Basquete.Framework.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace FURB.Basquete.Framework.Infrastructure.IoC
{
    public class InjectorMapping
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IConfig, Config>();
            services.AddScoped<IConnect, Connect>();

            services.AddScoped<ITimeAppService, TimeAppService>();
            services.AddScoped<ITemporadaTimeAppService, TemporadaTimeAppService>();
            services.AddScoped<IJogadorAppService, JogadorAppService>();
            services.AddScoped<ITemporadaJogadorAppService, TemporadaJogadorAppService>();            

            services.AddScoped<ITimeService, TimeService>();
            services.AddScoped<ITemporadaTimeService, TemporadaTimeService>();
            services.AddScoped<IJogadorService, JogadorService>();
            services.AddScoped<ITemporadaJogadorService, TemporadaJogadorService>();

            services.AddScoped<ICalculoTimeService, CalculoTimeService>();
            services.AddScoped<ICalculoJogadorService, CalculoJogadorService>();

            services.AddScoped<ITimeRepository, TimeRepository>();
            services.AddScoped<ITemporadaTimeRepository, TemporadaTimeRepository>();
            services.AddScoped<IJogadorRepository, JogadorRepository>();
            services.AddScoped<ITemporadaJogadorRepository, TemporadaJogadorRepository>();
        }
    }
}
