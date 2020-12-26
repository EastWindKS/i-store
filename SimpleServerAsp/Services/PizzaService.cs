using System.Collections.Generic;
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
        public Task<List<Pizza>> GettAllPizzas() => _pizzas.Find(pizza => true).ToListAsync();

        public Task<Pizza> GetPizzaById(string id)
        {
            return ObjectId.TryParse(id,out var newId) ? _pizzas.Find(pizza => pizza.Id == id).FirstOrDefaultAsync() : null;
        }

    }
}
