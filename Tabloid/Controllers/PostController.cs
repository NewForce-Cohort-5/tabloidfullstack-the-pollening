using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {

        private readonly IPostRepository _postRepository;
        
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        // GET: api/<PostController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        // GET api/<PostController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetById(id);
            if(post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("myposts")]
        public IActionResult GetAllPostsForUserId(int id)
        {
            return Ok(_postRepository.GetAllPostsByUserId(id));
        }

        // POST api/<PostController>
        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.AddNewPost(post);
            //return CreatedAtAction("Get", new { id = post.Id }, post);
            return Ok(_postRepository.GetAll());
        }

        // PUT api/<PostController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PostController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.Delete(id);
            return NoContent();
        }
    }
}
