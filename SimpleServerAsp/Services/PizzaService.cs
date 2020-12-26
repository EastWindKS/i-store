using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using SimpleServerAsp.Interfaces;
using SimpleServerAsp.Models;


namespace SimpleServerAsp.Services
{
    public class PizzaService : IPizzaService
    {
        public PizzaService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("PizzasDB"));
            var database = client.GetDatabase("Pizzas");
            _pizzas = database.GetCollection<Pizza>("Pizzas");
        }
        private readonly IMongoCollection<Pizza> _pizzas;

        public Task<List<Pizza>> GettAllPizzas(int? category, string filter)
        {
            var result = filter switch
            {
                "popularity" => _pizzas.Find(pizza => true).SortByDescending(pizza => pizza.Rating).ToListAsync(),
                "price" => _pizzas.Find(pizza => true).SortBy(pizza => pizza.Price).ToListAsync(),
                "alphabet" => _pizzas.Find(pizza => true).SortBy(p => p.Name).ToListAsync(),
                _ => _pizzas.Find(pizza => true).ToListAsync()
            };
            return category != null ? Task.Run(() => result.Result.Where(p => p.Category == category).ToList()) : result;
        }

        public Task<Pizza> GetPizzaById(string id)
        {
            return ObjectId.TryParse(id, out var newId) ? _pizzas.Find(pizza => pizza.Id == id).FirstOrDefaultAsync() : null;
        }


    }
}
