using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagement.Models
{
    public class ProfileOptionsService
    {
        public List<string> ListSex()
        {
            return new List<string>() { "","m", "f" };
        }
        public List<string> ListDepartment()
        {
            return new List<string>() { "","develop", "test", "manage"};
        }
    }
}
