import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
    getEmployees(): IEmployee[] {
        return [
            { code: 'e1', name: 'Tom Hopkins', gender: 'Male', annualSalary: 5400 },
            { code: 'e2', name: 'John Doe', gender: 'Male', annualSalary: 6500 },
            { code: 'e3', name: 'Mary Smith', gender: 'Female', annualSalary: 7400 }
        ];
    }
}
