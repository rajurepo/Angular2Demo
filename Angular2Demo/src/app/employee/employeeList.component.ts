import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service'; //import service

@Component({
    selector: 'list-emp',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService], //register service with Ang DI sys. which will be available for this and its child compoments; can be registered at module level ... root ang injector
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';

    //DI of service into constructor method with short hand syntax
    constructor(private _employeeService : EmployeeService) {              
    }

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
    };
    getEmployees(): void {
        this.employees = [
            { code: 'e1', name: 'Tom Hopkins', gender: 'Male', annualSalary: 5400 },
            { code: 'e2', name: 'John Doe', gender: 'Male', annualSalary: 6500 },
            { code: 'e3', name: 'Mary Smith', gender: 'Female', annualSalary: 7400 },
            { code: 'e4', name: 'Kim Jane', gender: 'Female', annualSalary: 3900 }
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}