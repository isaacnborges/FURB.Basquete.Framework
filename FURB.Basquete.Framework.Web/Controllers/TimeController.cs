using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FURB.Basquete.Framework.ApplicationService.Interfaces;
using FURB.Basquete.Framework.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace FURB.Basquete.Framework.Web.Controllers
{
    public class TimeController : Controller
    {
        private readonly ITimeAppService _timeAppService;

        public TimeController(ITimeAppService timeAppService)
        {
            _timeAppService = timeAppService;
        }

        public IActionResult Index()
        {
            var times = _timeAppService.GetAll();
            var result = times.Select(x => TimeViewModel.ToViewModel(x)).OrderBy(x => x.Nome).ToList();

            return View(result);
        }
    }
}