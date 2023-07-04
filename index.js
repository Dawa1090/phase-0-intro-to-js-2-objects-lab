// Write your solution in this file!
const employee = {
    name: "dawa",
    address: "123 street"
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const duplicateEmployee = { ...employee };
    duplicateEmployee[key] = value;
    return duplicateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee , key ) {
    const duplicateEmployee = { ...employee };
    delete duplicateEmployee[key];
    return duplicateEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
     delete employee[key];
     return employee;
}