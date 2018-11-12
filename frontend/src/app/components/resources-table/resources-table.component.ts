import { Component, OnInit } from '@angular/core';
import { MydataService } from '../../service/mydata.service';
import { Subscriber } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit {
  users: Object;
  pagesize:number = 0;
  page:number = 20;
  constructor(private data: MydataService) {}

  ngOnInit() {
    this.data.getUser(this.pagesize,this.page).subscribe(data => {
      this.users = data['data'];
    });
  }

  addForm(x,u){
    this.data.postUser(x,u);
  }
}
