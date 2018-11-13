import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // popup;
  show: boolean;

  constructor() {}

  ngOnInit() {
    this.show = false;
    
  }


  public signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }
}
