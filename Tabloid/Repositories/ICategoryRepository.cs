using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCategories();
        Category GetCategoryById(int id);
        public void Add(Category category);
        public void Delete(int id);
        public void UpdateCategory(Category category);
    }
}