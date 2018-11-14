import { Component, OnInit,DoCheck, OnChanges } from '@angular/core';
import { MydataService } from '../../service/mydata.service';
import { Subscriber } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit, OnChanges {
  users: Object;
  dataLength: number;
  resourceName: string;
  resourceCode: Number;
  // pagination
  pagesize:number = 0;

  page:number = 20;


  typing: string = '';

  searchText: string;

  getData(typing) {

    this.typing = typing;

    this.searchText = typing;
  }

  // toggles the ADD ROW display
  public status:Boolean = false; // invoked from the child component (Update) toggles update child

  constructor(private data: MydataService) {}

  ngOnInit() {
    this.data.getUser(this.pagesize,this.page).subscribe(data => {
      this.users = data['data'];
      console.log(this.users)
      this.dataLength = data['data'].length;
    });
  }


  // adds data to the database
  addForm(){
    // adds the data
    this.data.postUser(this.resourceName, this.resourceCode);
    // updates the data
    this.data.getUser(this.pagesize,this.page).subscribe(data => {
      this.users = data['data'];
    });
    // toggles the display
    this.status = !this.status;
  }
  ngOnChanges() {
    this.data.getUser(this.pagesize,this.page).subscribe(data => {
      this.users = data['data'];
    });
    // changes.prop contains the old and the new value...
}

  // ngDoCheck(){
  //   this.addForm();
  // }

  // invoked from the  child component
  onNotifyClicked(message:Boolean):void{
    this.status = !this.status;
  }

  // on cancel of the ADD INPUT
  onDiscard(){
    this.resourceName = "";
    this.resourceCode = null;
    this.status = !this.status; 
  }

  // pagination value getter
  onChange(pageIndex){
    this.pagesize = pageIndex -1;
    this.data.getUser(this.pagesize,this.page).subscribe(data => {
      this.users = data['data'];
    });
  }

  onSelectChange(pageLimit){
    this.page = pageLimit;
    this.data.getUser(this.pagesize,this.page).subscribe(data => {
      this.users = data['data'];
    });
  }
}
