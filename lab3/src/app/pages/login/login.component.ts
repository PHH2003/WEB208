import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public name: string = 'Hiepph'
  public email ={}
  public passwork ={}
  public handleClick() {
    console.log('ban vua click login!');
  }
}
