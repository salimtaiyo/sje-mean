import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  projectTitle = "Project 1";

  // popup;
  show: boolean;

  // name
  name = localStorage.getItem('name');
  lname = localStorage.getItem('lname');

  constructor(private projectHeader: TransferDataService) {}

  ngOnInit() {
    this.show = false;
    // Project Title
    this.projectHeader.title.subscribe(data => {
      if(!data){
        return;
      }
      this.projectTitle = data;
    })
  }

  public signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }


}
