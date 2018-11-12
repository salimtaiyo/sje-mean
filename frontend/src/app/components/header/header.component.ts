import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // popup;

  show: boolean;

  constructor() { 
    
  }

  ngOnInit() {
    this.show = false;
  }

  ngDoCheck() {
    
  }

  public signOut() {

    console.log("Sign Out");

    localStorage.removeItem("token");
    localStorage.removeItem("expiration");

  }

  // public personInfo(event) {

  //   console.log("works");

  //   this.popup = document.getElementById("InfoPopup");
  //   this.popup.classList.toggle("show");    
  // }

}
