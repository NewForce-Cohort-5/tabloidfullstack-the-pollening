using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        List<UserProfile> GetAll();
        UserProfile GetByEmail(string email);
    }
}