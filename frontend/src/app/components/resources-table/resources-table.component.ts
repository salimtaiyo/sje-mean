import { Component, OnInit,DoCheck, OnChanges } from '@angular/core';
import { MydataService } from '../../service/mydata.service';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit, OnChanges {
  users: Object;
  resourceName: String;
  resourceCode: Number;
  // pagination
  pagesize: Number = 0;
  page: Number = 20;

  typing: String = '';
  searchText: String;

  private columnArray: Array<any> = [];
  private newAttribute: any = {};

  getData(typing) {
    this.typing = typing;
    this.searchText = typing;
  }

  // toggles the ADD ROW display
  public status: Boolean = false; // invoked from the child component (Update) toggles update child

  constructor(private data: MydataService) {}
  ngOnInit() {
    this.data.getUser(this.pagesize, this.page).subscribe(data => {
      this.users = data['data'];
      console.log(this.users);

    });
  }

  addColumn() {

    this.columnArray.push(this.newAttribute);

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
}

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

  // pagination request
  onSelectChange(pageLimit){
    this.page = pageLimit;
    this.data.getUser(this.pagesize,this.page).subscribe(data => {
      this.users = data['data'];
    });
  }


}
