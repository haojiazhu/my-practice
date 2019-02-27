
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace EmployeeManagement.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult IsLogin(string account, string password)
        {
            if ("admin".Equals(account) && "123456".Equals(password))
            {                
                HttpContext.Session.SetString("account", account);               
                return RedirectToAction("Index", "Employees");
            }
            else
            {
                return View();
            }
        }

        public IActionResult LoginOut()
        {
            if (HttpContext.Session.GetString("account")!=null)
            {
                HttpContext.Session.Remove("account");
                return RedirectToAction("Login", "Login");
            }
            else
            {
                return RedirectToAction("Login", "Login");
            }
        }
    }
}