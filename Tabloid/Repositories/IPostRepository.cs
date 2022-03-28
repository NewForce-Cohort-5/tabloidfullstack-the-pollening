using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        public List<Post> GetAll();
        public Post GetById(int id);
    }
}
