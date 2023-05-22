import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  employees: Array<Employee> =[
    {
      "id": 1,
      "firstName": "phan huy",
      "lastName": "hiep",
      "birthdate": "25-08-2003",
      "phoneNumber": "0971080029",
      "gender": "",
      "company": "abcccc",
      "salary": 50
    }
  ]
}


