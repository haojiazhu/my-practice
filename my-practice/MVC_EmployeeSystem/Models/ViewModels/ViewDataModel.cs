using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.Models;

namespace EmployeeManagement.Models.ViewModels
{
    public class ViewDataModel
    {
        public string searchId { get; set; }
        public string searchLastName { get; set; }
        public string searchSex { get; set; }
        public string searchDepartment { get; set; }
        public string sortLastName { get; set; }
        public PaginatedList<EmployeeManagement.Models.Employee> PageShow { get; set; }

        public ViewDataModel(string searchId, string searchLastName, string searchSex,string searchDepartment)
        {
            this.searchId = searchId;
            this.searchLastName = searchLastName;
            this.searchSex = searchSex;
            this.searchDepartment = searchDepartment;            
        }
    }
}
