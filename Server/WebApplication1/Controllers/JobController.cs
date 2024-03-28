using Microsoft.AspNetCore.Mvc;
using JobsAPI.Models;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SalselaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        public static List<Job> allJobs = new List<Job>() 
        { 
            new Job {JobId = 1, JobField = "KINDERGARDEN", JobName = "גננת" , Area = "ירושלים", Requirements = "שנה נסיון", Hybrid = false, ScopeOfHours = 70},
            new Job {JobId = 2, JobField = "PROGRAMMING", JobName = "מפתחת אנגולר" , Area = "מרכז", Requirements = "משרת מתחיל", Hybrid = true, ScopeOfHours = 120},
            new Job {JobId = 3, JobField = "PROGRAMMING", JobName = "QA" , Area = "דרום", Requirements = "שנתיים נסיון בבדיקות אוטומציה", Hybrid = false, ScopeOfHours = 140},
            new Job {JobId = 4, JobField = "PROGRAMMING", JobName = "מפתח C#" , Area = "צפון", Requirements = "נסיון בפיתוח C#/JAVA שנתיים", Hybrid = false, ScopeOfHours = 120},
            new Job {JobId = 5, JobField = "TEACHING", JobName = "מורה בתיכון" , Area = "ירושלים", Requirements = "נשואה", Hybrid = false, ScopeOfHours = 80},
            new Job {JobId = 6, JobField = "TEACHING", JobName = "מורה לחינוך מיוחד" , Area = "מרכז", Requirements = "נסיון בASD", Hybrid = false, ScopeOfHours = 90},
            new Job {JobId = 7, JobField = "TAXES", JobName = "יועצת מס" , Area = "ירושלים", Requirements = "נסיון במשרד רואי חשבון", Hybrid = true, ScopeOfHours = 120},
            new Job {JobId = 8, JobField = "TAXES", JobName = "מנהלת חשבונות" , Area = "מרכז", Requirements = "נסיון בפריוריטי", Hybrid = true, ScopeOfHours = 120},
            new Job {JobId = 9, JobField = "TAXES", JobName = "חשבת שכר" , Area = "צפון", Requirements = "נסיון בתוכנת עוקץ", Hybrid = true, ScopeOfHours = 120},
        };

        [HttpGet("GetJobs")]
        public List<Job> Get()
        {
            return allJobs;
        }

    }
}
