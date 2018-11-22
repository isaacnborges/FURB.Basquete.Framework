using FURB.Basquete.Framework.ApplicationWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FURB.Basquete.Framework.ApplicationWeb.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Isaac Nunes Borges";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Isaac Nunes Borges";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
