import { NgModule }      from '@angular/core'; // to add metadata to ang. module similar to decorator to component
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
