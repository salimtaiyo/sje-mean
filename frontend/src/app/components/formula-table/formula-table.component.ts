import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/service/mydata.service';
import { TransferDataService } from 'src/app/service/transfer-data.service';

@Component({
  selector: 'app-formula-table',
  templateUrl: './formula-table.component.html',
  styleUrls: ['./formula-table.component.css']
})

export class FormulaTableComponent implements OnInit {

  private dataProject; // data thats fetched from the DB
  dataArray = []; // saves the value

  // input
  updateResource;
  updateCode;

  // Inserting column from the TEMPLATE PAGE
  templateArray = [];
  constructor(private dataService: MydataService, private transferService: TransferDataService) {}

  // to store the var for checking the column display or not

  checkCode: boolean = true;
  checkId: boolean = true;

  ngOnInit() {

    this.transferService.currentMessage.subscribe(
      message => this.dataProject = message
    );

    this.transferService.data.subscribe(data => {
      // console.log(data);

      for (let i = 0; i < data.length; i++) {
      this.templateArray.push(data[i]);

      }

    });

    // get the status from template page

    this.transferService.check.subscribe(check => {

      console.log(check);

      if (check.length === 0 ) {

        this.checkCode = true;
        this.checkId = true;

      } else {

        this.checkCode = check[0];
        this.checkId = check[1];

      }

    });

  }

  // inline editing valuable
  showEditTable: boolean = false;
  editRowID: number;

  checkEditRow(val) {
    this.editRowID = val;
  }

  submitUpdate(data) {
    if (!this.updateCode) {
      this.updateCode = data.code;
    }

    if (!this.updateResource) {
      this.updateResource = data.resource;
    }

    const updatedValue = {
      resource : this.updateResource,
      code: this.updateCode,
      _id: data._id

    };

    this.dataService.updateData(updatedValue);

    this.editRowID = null;
  }

  jjj(e){
    console.log(e);

  }
}
