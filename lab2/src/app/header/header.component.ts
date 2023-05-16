import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerTitle: string;
  imageTitle: string;
  constructor(){
  this.headerTitle = "hppp"
  this.imageTitle = ""
  }
}


