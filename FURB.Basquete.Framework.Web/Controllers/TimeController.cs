﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FURB.Basquete.Framework.Web.Controllers
{
    public class TimeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}