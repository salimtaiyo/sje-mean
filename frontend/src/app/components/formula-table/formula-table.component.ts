import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/service/mydata.service';
import { TransferDataService } from 'src/app/service/transfer-data.service';

@Component({
  selector: 'app-formula-table',
  templateUrl: './formula-table.component.html',
  styleUrls: ['./formula-table.component.css']
})

export class FormulaTableComponent implements OnInit {

  private dataProject;// data thats fetched from the DB
  dataArray=[]; // saves the value

  // input
  updateResource;
  updateCode;

  constructor(private dataService:MydataService, private transferService:TransferDataService) {}

  ngOnInit() {
    this.transferService.currentMessage.subscribe(
      message => this.dataProject = message
    )
  }

  // inline editing valuable
  showEditTable: boolean = false;
  editRowID: number;

  checkEditRow(val) {
    this.editRowID = val;
  }

  submitUpdate(data) {
    if(!this.updateCode){
      this.updateCode = data.code;
    }
    console.log(this.updateResource,this.updateCode);
  }

}
