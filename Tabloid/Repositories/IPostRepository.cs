using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        public List<Post> GetAll();
        public Post GetById(int id);

        public List<Post> GetAllPostsByUserId(int id);
        public void Add(Post post);
        public void AddNewPost(Post post);
    }
}
