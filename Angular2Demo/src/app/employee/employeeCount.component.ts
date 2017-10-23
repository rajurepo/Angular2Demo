import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent {
    @Input() all: number;

    @Input() male: number;

    @Input() female: number;

    selectedRadioButtonValue: string = 'All';

    //custom event
    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    //method to fire custom event
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        //console.log(this.selectedRadioButtonValue);
    }
}