import { Component } from '@angular/core';

@Component({
    selector: 'my-emp',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    firstName: string = 'John';
    lastName: string = 'Doe';
    getEmail(): string {
        return 'test@test.com';
    }
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}