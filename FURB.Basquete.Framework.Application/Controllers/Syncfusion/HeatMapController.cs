using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
namespace FURB.Basquete.Framework.Application.Controllers
{
    public class HeatMapController : Controller
    {
        public IActionResult HeatMapFeatures()
        {
        	return View();
        }
    }
}
