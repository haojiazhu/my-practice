using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Models.ViewModels
{
    public class LoginViewModel
    {
        public string Account { get; set; }

        [Required]
        [DataType(DataType.Password)]        
        public string PassWord { get; set; }
    }
}
