using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using EmployeeManagement.Models;
using Microsoft.AspNetCore.Http;
using EmployeeManagement.Models.ViewModels;
using Microsoft.Extensions.Options;
using System.Linq.Dynamic.Core;

namespace EmployeeManagement.Controllers
{
    public class EmployeesController : BaseController
    {
        private readonly EmployeeManagementContext _context;
        private readonly IOptions<PageInfo> _pageinfo;
        public EmployeesController(EmployeeManagementContext context, IOptions<PageInfo> pageinfo)
        {
            _context = context;
            _pageinfo = pageinfo;
        }

        // GET: Employees
        [Route("employees/")]
        public async Task<IActionResult> Index(string PreviousOrder,string PreviousRule, 
            string searchId, string searchLastName, string searchSex, string searchDepartment, 
            string sortOrder, string sortRule, int? page)
        {
            string OutAccount = HttpContext.Session.GetString("account");
            ViewData["CurrentAccount"] = OutAccount;

            PreviousRule = string.IsNullOrEmpty(sortRule) ? PreviousRule : sortRule;
            ViewData["PreviousRule"] = PreviousRule;
            sortOrder = string.IsNullOrEmpty(sortOrder) ? "First_Name" : sortOrder;

            ViewData["PreviousOrder"] = sortOrder;
            if (page > 0)
            {
                sortRule = sortRule == "DESC" ? "DESC" : "ASC";
            }
            else
            {
                if (PreviousOrder == sortOrder)
                {
                    sortRule=sortRule == "DESC" ? "ASC" : "DESC";
                }
                else
                {
                    sortRule = "ASC";
                }               
            }
            ViewData["sortRule"] = sortRule;
            ViewData["CurrentSort"] = sortOrder;

            //var employees = from m in _context.Employee
            //                select m;
            IQueryable<Employee> employees = _context.Employee;

            employees=Search(employees, searchId, searchLastName, searchSex, searchDepartment);
            employees = employees.OrderBy($"{sortOrder} " + sortRule);
            int pageSize = _pageinfo.Value.PageSize;
            ViewDataModel model = new ViewDataModel(searchId, searchLastName, searchSex, searchDepartment);
            model.PageShow = await PaginatedList<Employee>.CreateAsync(employees.AsNoTracking(), page ?? 1, pageSize);
            return View(model);
        }
        // GET: Employees/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employee = await _context.Employee
                .FirstOrDefaultAsync(m => m.Id == id);
            if (employee == null)
            {
                return NotFound();
            }

            return View(employee);
        }
        // GET: Employees/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Employees/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,First_Name,Last_Name,Sex,Birth,Phone,Department")] Employee employee)
        {
            if (ModelState.IsValid)
            {
                _context.Add(employee);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(employee);
        }

        // GET: Employees/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return View(employee);
        }

        // POST: Employees/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,First_Name,Last_Name,Sex,Birth,Phone,Department")] Employee employee)
        {
            if (id != employee.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(employee);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EmployeeExists(employee.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(employee);
        }

        // GET: Employees/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employee = await _context.Employee
                .FirstOrDefaultAsync(m => m.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            return View(employee);
        }

        // POST: Employees/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {

            var employee = await _context.Employee.FindAsync(id);
            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employee.Any(e => e.Id == id);
        }

        public IQueryable<Employee> Sort(IQueryable<Employee> employees, string sortWord, string sortRule)
        {
            /*
            switch (sortWord)
            {
                case "firstname":
                    //employees = employees.OrderBy(e => e.First_Name);
                    employees = employees.OrderBy($"First_Name "+sortRule);
                    break;              
                case "lastname":
                    employees = employees.OrderBy($"Last_Name " + sortRule);
                    break;
                case "birth":
                    employees = employees.OrderBy($"Birth " + sortRule);
                    //employees = employees.OrderBy($"Birth ASC"); 
                    break;               
                default:
                    employees = employees.OrderBy(e => e.Id);
                    break;
            }
            */
            employees = employees.OrderBy($"{sortWord} " + sortRule);
            return employees;
        }

        public IQueryable<Employee> Search(IQueryable<Employee> employees, string searchId, string searchLastName, string searchSex, string searchDepartment)
        {
            if (!String.IsNullOrEmpty(searchId))
            {
                employees = employees.Where(s => s.Id.ToString().Contains(searchId));
            }
            if (!String.IsNullOrEmpty(searchLastName))
            {
                employees = employees.Where(s => s.Last_Name.Contains(searchLastName));
            }
            if (!String.IsNullOrEmpty(searchSex))
            {
                employees = employees.Where(s => s.Sex.Contains(searchSex));
            }
            if (!String.IsNullOrEmpty(searchDepartment))
            {
                employees = employees.Where(s => s.Department.Equals(searchDepartment));
            }
            return employees;
        }

    }
}
