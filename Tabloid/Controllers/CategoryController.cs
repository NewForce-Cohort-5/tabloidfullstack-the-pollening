using Microsoft.AspNetCore.Mvc;
using System;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository    _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {

            _categoryRepository = categoryRepository;
        }

        // this is to get all categories
        [HttpGet]
        public IActionResult GetAllCategories()
        {
            
            return Ok(_categoryRepository.GetAllCategories());
        }
        // GET api/<CategoryController>/5 this is to get a specific category for editing
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var cagegory = _categoryRepository.GetCategoryById(id);
            if (cagegory == null)
            {
                return NotFound();
            }
            return Ok(cagegory);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Category category)
        {
            if(id != category.Id)
            {
                return BadRequest();
            }
            _categoryRepository.UpdateCategory(category);
            return NoContent();
         }

        //POST api/<CategoryController> this is to add a category
        [HttpPost]
        public IActionResult Post(Category category)
        {
            _categoryRepository.Add(category);
            return NoContent();
        }

        // DELETE api/<CategoryController> this is to delete a category from the database

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryRepository.Delete(id);
            return NoContent();
        }

        



        //// PUT api/<CategoryController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

    }
}
