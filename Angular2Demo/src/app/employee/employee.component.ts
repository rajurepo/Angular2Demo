import { Component } from '@angular/core';

@Component({
    selector: 'my-emp',
    templateUrl: 'app/employee/employee.component.html'
})

export class EmployeeComponent {
    firstName: string = 'John';
    lastName: string = 'Doe';
}