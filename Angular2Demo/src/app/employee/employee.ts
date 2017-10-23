export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;

    //dept?:string optional prop, may not be declared inherited class
    //computeMonthlySalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
    //short hand syntax to declare public props.
    constructor(public code: string, public name: string, public gender: string, public annualSalary: number) {
    }

    //computeMonthlySalary(annualSalary: number): number {
    //    return 0;
    //}
}

