let employeeTable = document.querySelector('#employeeList');
let employeeName = document.querySelector('#empName');
let employeeAge = document.querySelector('#empAge');
let employeeDesignation = document.querySelector('#empDesignation');
let table = document.querySelector('table');
let action_btn = document.querySelector('#action_btn');
let temArray = [];
let selectRow = null;
let x = 1;
const onFormSubmit = () => {
    if (x) {
        if ((employeeName.value == "") || (employeeAge.value == "") || (employeeDesignation.value == "")) {
            alert("Please enter the required field");
        }
        else {
            createdTable();
            resetFields();
            if (selectRow != null) {
                EmployeeData();
            }
        }
    }else {
        selectRow.cells[0].innerHTML = employeeName.value;
        selectRow.cells[1].innerHTML = employeeAge.value;
        selectRow.cells[2].innerHTML = employeeDesignation.value;
        x = 1;
        resetFields();
    }
}
const EmployeeData = () => {
    let employeeData = {};
    employeeData['employeeName'] = employeeName.value;
    employeeData['employeeAge'] = employeeAge.value;
    employeeData['employeeDesignation'] = employeeDesignation.value;
    temArray.push(employeeData);
}
const createdTable = () => {
    let tr = document.createElement('tr');
    let empName = document.createElement('td');
    let empAge = document.createElement('td');
    let empDesignation = document.createElement('td');
    let actionPerformed = document.createElement('td');

    let empNameText = document.createTextNode(employeeName.value);
    let empAgeText = document.createTextNode(employeeAge.value);
    let empDesignationText = document.createTextNode(employeeDesignation.value);

    empName.appendChild(empNameText);
    empAge.appendChild(empAgeText);
    empDesignation.appendChild(empDesignationText);
    actionPerformed.innerHTML = `<a onClick="onEdit(this)" class="btn_edit">Edit</a>
    <a onClick="onDelete(this)" class="btn_delete">Delete</a>`;

    tr.appendChild(empName);
    tr.appendChild(empAge);
    tr.appendChild(empDesignation);
    tr.appendChild(actionPerformed);
    table.appendChild(tr);
    document.body.appendChild(table);
}
const resetFields = () => {
    employeeAge.value = "";
    employeeName.value = "";
    employeeDesignation.value = "";
    selectRow = null;
}
const onDelete = (val) => {
    if (confirm('Do You really want to delete this?')) {
        selectRow = val.parentElement.parentElement;
        table.deleteRow(selectRow.rowIndex);
        resetFields();
    }
}
const onEdit = (val) => {
    selectRow = val.parentElement.parentElement;
    employeeName.value = selectRow.cells[0].innerHTML;
    employeeAge.value = selectRow.cells[1].innerHTML;
    employeeDesignation.value = selectRow.cells[2].innerHTML;
    x = 0;
}