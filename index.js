const employee = {
    name: "Almaz",
    streetAddress: "312 Frunze Street, Bishkek, Kyrgyzstan"
}
function updateEmployeeWithKeyAndValue(employee, streetAddress, newAddress) {
    const newEmployee = {...employee}
    newEmployee[streetAddress] = newAddress
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, newAddress) {
    employee [streetAddress] = newAddress
    return employee
}
function deleteFromEmployeeByKey(employee, name) {
    const delEmployee = {...employee}
    delete delEmployee.name
    return delEmployee
}
console.log(employee)
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}
console.log(employee)
