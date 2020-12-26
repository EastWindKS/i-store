
using System.Collections.Generic;
using System.Threading.Tasks;
using SimpleServerAsp.Models;

namespace SimpleServerAsp.Interfaces
{
    public interface IPizzaService
    {
        Task<List<Pizza>> GettAllPizzas(int? category, string filter);
        Task<Pizza> GetPizzaById(string id);
    }
}
