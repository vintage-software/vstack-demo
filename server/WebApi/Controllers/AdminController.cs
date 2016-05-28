using Mapper.General;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.OptionsModel;
using System;
using Vstack.Services.Mapper.General;
using WebApi.General;

namespace WebApi.Controllers
{
    public class AdminController
    {
        private DbSettings dbSettings;

        private Settings settings;

        public AdminController(DbSettings dbSettings, IOptions<Settings> settings)
        {
            this.dbSettings = dbSettings;
            this.settings = settings.Value;
        }

        [HttpGet("admin/modified")]
        public DateTime Modified()
        {
            return settings.UtcDateModified;
        }

        [HttpPost("admin/reset")]
        public void Reset()
        {
            new OkrDbContext(this.dbSettings.ConnectionString).Database.Delete();
        }
    }
}