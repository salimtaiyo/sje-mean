import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // popup;
  show: boolean;

  // name
  name = localStorage.getItem('name');
  lname = localStorage.getItem('lname');

  constructor() {}

  ngOnInit() {
    this.show = false;
    console.log(this.name);
    
    
  }

  public signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }
}
