"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = (function () {
    //short hand syntax to declare public props.
    function Employee(code, name, gender, annualSalary) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map