using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.ApplicationService.Services;
using FURB.Basquete.Framework.Domain.Interfaces.Repositories;
using FURB.Basquete.Framework.Domain.Interfaces.Services;
using FURB.Basquete.Framework.Domain.Services;
using FURB.Basquete.Framework.Infrastructure.Data;
using FURB.Basquete.Framework.Infrastructure.Interfaces;
using FURB.Basquete.Framework.Infrastructure.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FURB.Basquete.Framework.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

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

            services.AddScoped<ITimeRepository, TimeRepository>();
            services.AddScoped<ITemporadaTimeRepository, TemporadaTimeRepository>();
            services.AddScoped<IJogadorRepository, JogadorRepository>();
            services.AddScoped<ITemporadaJogadorRepository, TemporadaJogadorRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
