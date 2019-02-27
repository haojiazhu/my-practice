using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public String First_Name { get; set; }
        public String Last_Name { get; set; }
        [Display(Name = "sex(m or f)")]
        [RegularExpression(@"[mf]{1}")]
        [StringLength(1)]
        [Required]
        public String Sex { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime Birth { get; set; }
        [RegularExpression(@"[0-9]{11}")]
        [StringLength(11)]
        [Required]
        public String Phone { get; set; }
        public String Department { get; set; }
    }
}
