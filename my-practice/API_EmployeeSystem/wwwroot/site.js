const uri = "api/employee";

$(document).ready(function () {
    search();
    getData();
    checkForm();
});

function getData() {
    $.ajax({
        type: "GET",
        url: uri,
        cache: false,
        success: function (data) {
            var t = $('#EmployeeTable').DataTable();
            t.clear().draw();    
            $.each(data, function (key, employee) {
                t.row.add([employee.id,employee.first_Name, employee.last_Name, employee.gender, employee.birth, employee.department, employee.phone, "<button onclick='editItem(" + employee.id + ")'>Edit</button>", "<button onclick='deleteItem(" + employee.id + ")'>Delete</button>"]).draw(false);               
            });          
        }
    });    
}

function addItem() {
    const item = {
        first_Name: $("#addfn").val(),
        last_Name: $("#addln").val(),       
        Gender: $("#addg").val(),
        Birth: $("#addb").val(),
        Department: $("#addd").val(),
        Phone: $("#addp").val()
    };

    $.ajax({
        type: "POST",
        accepts: "application/json",
        url: uri,
        contentType: "application/json",
        data: JSON.stringify(item),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
        },
        success: function (result) {     
            getData();
            $("#addfn").val("");
            $("#addln").val("");
            $("#addg").val("m");
            $("#addb").val("");
            $("#addd").val("develop");
            $("#addp").val("");            
        }
    });
}

function deleteItem(id) {
    var con = confirm("是否确定删除？");
    if (con == false) {
        return;
    }
    $.ajax({
        url: uri + "/" + id,
        type: "DELETE",
        success: function (result) {
            getData();
        }
    });
}
function editItem(id) {
    var table = $('#EmployeeTable').DataTable();
    var data = table.data().toArray();
    data = jQuery.grep(data, function (a) {
        return a[0] == id;
    }); 
    $("#editid").val(data[0][0]);
    $("#editfn").val(data[0][1]);
    $("#editln").val(data[0][2]);
    $("#editg").val(data[0][3]);
    $("#editb").val(data[0][4]);
    $("#editd").val(data[0][5]);
    $("#editp").val(data[0][6]);
    $("#spoiler").show();
}

function update() {
    const item = {
        id: $("#editid").val(),
        first_Name: $("#editfn").val(),
        last_Name: $("#editln").val(),
        Gender: $("#editg").val(),
        Birth: $("#editb").val(),
        Department: $("#editd").val(),
        Phone: $("#editp").val()
    };

    $.ajax({
        url: uri + "/" + $("#editid").val(),
        type: "PUT",
        accepts: "application/json",
        contentType: "application/json",
        data: JSON.stringify(item),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
        },
        success: function (result) {
            getData();
        }
    });
    closeInput();
}

function closeInput() {
    $("#spoiler").hide();
}

function showadd() {
    $("#adddiv").show();
}
function closeadd() {
    $("#adddiv").hide();
}

function search() {
    $('#EmployeeTable tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });
    // DataTable
    var table = $('#EmployeeTable').DataTable();
    // Apply the search
    table.columns().every(function () {
        var that = this;
        $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
}

function checkForm() {
    var ruleItem = {
        firstName: "required",
        lastName: "required",
        gender: "required",
        birth: "required",
        phone: {
            required: true,
            digits: true,
            minlength: 11,
            maxlength: 11
        },
        department: "required",
    }
    var messageItem = {
        firstName: "请输入正确的姓！",
        lastName: "请输入正确的名！",
        gender: "请输入性别！",
        birth: "请输入生日！",
        phone: "请输入正确的手机号（11位数字）！",
        department: "请输入正确的部门！",
    }

    //add
    $("#addForm").validate({
        rules: ruleItem,
        messages: messageItem,
        submitHandler: function () {
            addItem();
        }
    })

    //edit
    $("#editForm").validate({
        rules: ruleItem,
        messages: messageItem,
        submitHandler: function () {
            update();
        }
    })
} 


