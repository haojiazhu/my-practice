using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeSystem.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Gender { get; set; }
        public string Department { get; set; }
        public DateTime Birth { get; set; }
        public string Phone { get; set; }

    }
}
