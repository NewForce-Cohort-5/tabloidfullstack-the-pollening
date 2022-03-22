using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public class PostRepository: BaseRepository, IPostRepository
    {

        public PostRepository(IConfiguration config) : base(config) { }


    }
}
