using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.Api.Models;

namespace DatingApp.Api.Data
{
    public interface IDatingRepository
    {
        // where is constrant for T to be class only
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}