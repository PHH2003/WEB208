import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerTitle: string;
  imageTitle: string;
  constructor(){
  this.headerTitle = ""
  this.imageTitle = "https://angular.io/assets/images/logos/angular/shield-large.svg"
  }
}


