using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace EmployeeManagement.Controllers
{
    public class BaseController : Controller
    {        
        public override void OnActionExecuting(Microsoft.AspNetCore.Mvc.Filters.ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.Session.GetString("account") == null)
            {
                filterContext.Result = new RedirectResult("/Login/Login");
            }
            
        }
    }
}