using Tabloid.Repositories;
using Tabloid.Models;
using Microsoft.AspNetCore.Mvc;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public IActionResult get()
        {
            return Ok(_tagRepository.GetAll());
        }
    }
}