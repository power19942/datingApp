﻿using System.Threading.Tasks;
using DatingApp.Api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Api.Controllers
{
  [Authorize]
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    private readonly DataContext _context;

    public ValuesController(DataContext context)
    {
      _context = context;
    }

    // GET api/values
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var values = await _context.Values.ToListAsync();
        return Ok(values);
    }

    // GET api/values/5
    [AllowAnonymous]
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
      return Ok( await _context.Values.FirstOrDefaultAsync(x => x.id == id));
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
