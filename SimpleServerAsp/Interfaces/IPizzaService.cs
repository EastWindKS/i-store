
using System.Collections.Generic;
using System.Threading.Tasks;
using SimpleServerAsp.Models;

namespace SimpleServerAsp.Interfaces
{
   public interface IPizzaService
    {
        Task<List<Pizza>> GettAllPizzas();
        Task<Pizza> GetPizzaById(string id);
    }
}
