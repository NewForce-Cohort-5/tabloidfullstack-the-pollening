using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }
    }



}
