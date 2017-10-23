"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service"); //import service
var EmployeeListComponent = (function () {
    //DI of service into constructor method with short hand syntax
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeCountRadioButton = 'All';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.employees = this._employeeService.getEmployees();
    };
    ;
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'e1', name: 'Tom Hopkins', gender: 'Male', annualSalary: 5400 },
            { code: 'e2', name: 'John Doe', gender: 'Male', annualSalary: 6500 },
            { code: 'e3', name: 'Mary Smith', gender: 'Female', annualSalary: 7400 },
            { code: 'e4', name: 'Kim Jane', gender: 'Female', annualSalary: 3900 }
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-emp',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
            providers: [employee_service_1.EmployeeService],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map