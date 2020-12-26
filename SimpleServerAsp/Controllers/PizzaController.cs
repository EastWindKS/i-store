using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SimpleServerAsp.Interfaces;
using SimpleServerAsp.Models;

namespace SimpleServerAsp.Controllers
{
    [Route("/pizzas")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        public PizzaController(IPizzaService pizzaRepository)
        {
            _pizzaRepository = pizzaRepository;
        }

        private readonly IPizzaService _pizzaRepository;

        [HttpGet]
        public ActionResult<List<Pizza>> GettAllPizzas([FromQuery] int? category, [FromQuery] string filter)
        {

            var result = _pizzaRepository.GettAllPizzas(category, filter);
            return Ok(result.Result);
        }

        [HttpGet("{id}", Name = "GetById")]
        public ActionResult<Pizza> GetTobaccoProductById(string id)
        {
            var pizza = _pizzaRepository.GetPizzaById(id);
            if (pizza != null)
            {
                return Ok(pizza.Result);
            }

            return NotFound();
        }
    }
}
