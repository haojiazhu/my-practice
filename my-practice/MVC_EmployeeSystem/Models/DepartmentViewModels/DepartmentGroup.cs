using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Models.DepartmentViewModels
{
    public class DepartmentGroup
    {      
        public String Department { get; set; }

        public int EmployeeCount { get; set; }
    }
}
