using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SoftUniLabs.Data;
using SoftUniLabs.Models;

namespace SoftUniLabs.Controllers
{
    public class LabController : Controller
    {
        private readonly LabDbContext context;

        public LabController(LabDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [Route("/")]
        public IActionResult Index()
        {
            //TODO: Implement me
            var labs = context.Labs.ToList();
            return View(labs);
        }

        [HttpGet]
        [Route("/create")]
        public IActionResult Create()
        {
            //TODO: Implement me
            return View();
        }

        [HttpPost]
        [Route("/create")]
        public IActionResult Create(Lab lab)
        {
            //TODO: Implement me
            context.Labs.Add(lab);
            context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        [HttpGet]
        [Route("/edit/{id}")]
        public IActionResult Edit(int id)
        {
            //TODO: Implement me
            Lab lab = context.Labs.FirstOrDefault(l => l.Id == id);
            return View(lab);
        }

        [HttpPost]
        [Route("/edit/{id}")]
        public IActionResult Edit(Lab lab)
        {
            //TODO: Implement me
            context.Update(lab);
            context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        [HttpGet]
        [Route("/delete/{id}")]
        public IActionResult Delete(int id)
        {
            //TODO: Implement me
            Lab lab = context.Labs.FirstOrDefault(l => l.Id == id);
            return View(lab);
        }

        [HttpPost]
        [Route("/delete/{id}")]
        public IActionResult Delete(Lab lab)
        {
            //TODO: Implement me
            context.Labs.Remove(lab);
            context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }
    }
}
