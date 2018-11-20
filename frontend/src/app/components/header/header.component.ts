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
  name;
  lname;

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

    this.checker();
  }

  checker(){
    if(!this.name){
      this.name = "User",
      this.lname= "name"
    }
    this.name = localStorage.getItem('name');
    this.lname = localStorage.getItem('lname');
  }
  public signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    
    // clears tha name
    localStorage.removeItem("name");
    localStorage.removeItem("lname");
  }


}
