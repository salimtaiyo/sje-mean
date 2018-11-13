import { Component, OnInit } from '@angular/core';
import { MydataService } from '../../service/mydata.service';
import { Subscriber } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit {
  users: Object;
  pagesize:number = 0;
  page:number = 20;
<<<<<<< HEAD:frontend/src/app/components/resources-table/resources-table.component.ts
=======

  typing: string = '';

  searchText: string;

  getData(typing) {

    this.typing = typing;

    this.searchText = typing;
  }

>>>>>>> ElvisA:frontend/src/app/components/resources-table/resources-table.component.ts
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
