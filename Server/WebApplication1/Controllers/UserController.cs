using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;
using JobsAPI.Models;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> allPeople = new List<User>() 
        { 
            new User { Id = 1, UserName = "Avi", Password = "01/01/2000",JobField="PROGRAMMING" },
            new User { Id =  2, UserName = "Coig", Password = "01/01/2000",JobField="KINDERGARDEN" },
            new User { Id = 3, UserName = "Chani", Password = "87654321",JobField="TAXES" },
            new User { Id = 4, UserName = "Ya'akov", Password = "9876453",JobField="TEACHING" },
            new User { Id = 5, UserName = "Eli", Password = "1122334455",JobField="PROGRAMMING" }

        };
  
        [HttpGet("{name}/{password}")]
        public User Get(string password,string name)
        {
            return allPeople.FirstOrDefault(u => u.Password.Equals(password) && u.UserName.Equals(name));
        }

    }
}
