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

        //POST api/<CategoryController> this is to add a category
        [HttpPost]
        public IActionResult Post(Category category)
        {
            _categoryRepository.Add(category);
            return NoContent();
        }

        //// GET api/<CategoryController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        

        //// PUT api/<CategoryController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<CategoryController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
