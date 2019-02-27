using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EmployeeManagement.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new EmployeeManagementContext(
                serviceProvider.GetRequiredService<DbContextOptions<EmployeeManagementContext>>()))
            {
                // Look for any movies.
                if (context.Employee.Any())
                {
                    return;   // DB has been seeded
                }

                context.Employee.AddRange(
                     new Employee
                     {
                         First_Name = "yi",
                         Last_Name = "aaa",
                         Sex = "m",
                         Birth = DateTime.Parse("1989-1-11"),
                         Phone="12345678901",
                         Department= "develop"
                     },

                     new Employee
                     {
                         First_Name = "er",
                         Last_Name = "bbb",
                         Sex = "m",
                         Birth = DateTime.Parse("1998-5-21"),
                         Phone = "10987654321",
                         Department = "test"
                     },

                     new Employee
                     {
                         First_Name = "san",
                         Last_Name = "ccc",
                         Sex = "f",
                         Birth = DateTime.Parse("1987-11-22"),
                         Phone = "19283746501",
                         Department = "manage"
                     },

                   new Employee
                   {
                       First_Name = "si",
                       Last_Name = "ddd",
                       Sex = "m",
                       Birth = DateTime.Parse("1978-5-11"),
                       Phone = "16542378910",
                       Department = "develop"
                   }
                );
                context.SaveChanges();
            }
        }
    }
}
