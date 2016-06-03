using Mapper.General;
using Mapper.Objectives;
using Mapper.Users;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Localization;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Service.General;
using Service.Objectives.Services;
using Service.Users.Services;
using Swashbuckle.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using Vstack.Api.Web.General;
using Vstack.Services.Mapper.General;
using Vstack.Services.Security;
using WebApi.General;

namespace WebApi
{
    public class Startup
    {
        private readonly IConfigurationRoot _Configuration;

        public Startup(IHostingEnvironment env)
        {
            this._Configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables()
                .Build();

            this.SetDatabaseInitializer();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<Settings>(this._Configuration.GetSection("settings"));

            services
                .AddInstance<IConfiguration>(this._Configuration)
                .AddInstance(new Permissions())
                .AddInstance(new UserAuthenticationHelper(5, TimeSpan.FromMinutes(30), TimeSpan.FromHours(2), 6))
                .AddInstance(new DbSettings() { ConnectionString = this._Configuration.Get<string>("Data:Okr:ConnectionString") });

            services
                .AddScoped<AssignmentMapper>()
                .AddScoped<CompanyObjectiveMapper>()
                .AddScoped<DepartmentObjectiveMapper>()
                .AddScoped<KeyResultMapper>()
                .AddScoped<ObjectiveAssociationMapper>()
                .AddScoped<CompanyMapper>()
                .AddScoped<DepartmentMapper>()
                .AddScoped<EmployeeMapper>()

                .AddScoped<AssignmentService>()
                .AddScoped<CompanyObjectiveService>()
                .AddScoped<DepartmentObjectiveService>()
                .AddScoped<KeyResultService>()
                .AddScoped<ObjectiveAssociationService>()
                .AddScoped<CompanyService>()
                .AddScoped<DepartmentService>()
                .AddScoped<EmployeeService>();

            services.AddMvc(ConfigureMvcOptions);
            AddCors(services);
            AddSwagger(services);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            ConfigureCache(app);

            app
                .UseDeveloperExceptionPage()
                .UseCors("AllowAllOrigins")
                .UseMvc();

            app.UseSwaggerGen();
            app.UseSwaggerUi();
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);

        private static void ConfigureCache(IApplicationBuilder app)
        {
            // fix for using SOSS libraries with .NET vNext/Core/5
            var localizationOptions = new RequestLocalizationOptions()
            {
                SupportedCultures = new List<CultureInfo> { new CultureInfo("") },
                SupportedUICultures = new List<CultureInfo> { new CultureInfo("") }
            };
            var invariantCulture = new RequestCulture(new CultureInfo(""), new CultureInfo(""));
            app.UseRequestLocalization(localizationOptions, invariantCulture);
        }

        private static void AddCors(IServiceCollection services)
        {
            services.AddCors();

            var policy = new Microsoft.AspNet.Cors.Infrastructure.CorsPolicy();

            policy.Headers.Add("*");
            policy.Methods.Add("*");
            policy.Origins.Add("*");
            policy.SupportsCredentials = true;

            services.AddCors(x => x.AddPolicy("AllowAllOrigins", policy));
        }

        private static void AddSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen();
            services.ConfigureSwaggerDocument(o =>
            {
                o.SingleApiVersion(new Info
                {
                    Version = "v1",
                    Title = "Okr Api",
                    Description = "Okr description",
                    TermsOfService = "None",
                    Contact = new Contact() { Email = "shaar@vintagesoftware.com", Name = "Steve Haar" }
                });
            }
            );

            services.ConfigureSwaggerSchema(options =>
            {
                options.DescribeAllEnumsAsStrings = true;
            });
        }

        private void ConfigureMvcOptions(MvcOptions options)
        {
            options.Conventions.Insert(0, new RouteConvention());

            options.OutputFormatters.Clear();

            var jsonOutputFormatter = new JsonOutputFormatter();
            var settings = jsonOutputFormatter.SerializerSettings;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            settings.Formatting = Newtonsoft.Json.Formatting.Indented;
            settings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            options.OutputFormatters.Add(jsonOutputFormatter);
        }

        private void SetDatabaseInitializer()
        {
            Database.SetInitializer(new OkrDbInitializer());
        }
    }
}