import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<list-emp></list-emp>`,

    //template: `<input type='text' [(ngModel)]='userText'/>
    //            <br/><br/>
    //            <simple [simpleInput]='userText'></simple>`,
    //template: `<button (click)='onClick()'>Click Me</button>`,
    //template: `<input [(ngModel)]='name'>
    //          <br/>
    //          You entered: {{name}}`,
    //templateUrl: '/angular2demo/src/app/app.component.html'

})
export class AppComponent {
    
     pageHeader : string = 'Employee Details';
    //imagePath: string = 'http://www.pragimtech.com/Images/Logo.JPG';
    //name: string = 'Tom';
    //onClick(): void {
    //    console.log('Button Clicked');  
    //userText: string = 'Pragim';
}
