import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
@Input() employee: Employee;
@Output() onRemoveEmployee = new EventEmitter<number>();
@Output() onEditEmployee = new EventEmitter<number>()
constructor(){
  this.employee ={
    id: 0,
    firstName: "",
    lastName:"",
    birthdate: '',
    phoneNumber: '',
    gender: '',
    company: '',
    salary: 0
  }
}
ngOnInit(): void{
  console.log(this.employee);
}
removeEmployee(employee: Employee){
  console.log(this.employee);

}
editEmployee(employee: Employee){
  console.log(this.employee);

}
}