import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: '/src/app/app.component.html'
})
export class AppComponent  {
    pageHeader = 'Employee Details';
}
