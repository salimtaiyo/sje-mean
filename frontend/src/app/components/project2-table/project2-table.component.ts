import { Component, OnInit, Input } from '@angular/core';
import { ProjectToFormularService } from 'src/app/service/project-to-formular.service';

@Component({
  selector: 'app-project2-table',
  templateUrl: './project2-table.component.html',
  styleUrls: ['./project2-table.component.css']
})

export class Project2TableComponent implements OnInit {

  @Input() datas;
  indexArr: Array<number> = [];

  // data transfer

  message: any[];

  constructor (private data: ProjectToFormularService) {

  }

  // public data: Array<any> = this.indexArr;

  // constructor(private myService: ProjectToFormularService) {
  //   this.myService.dataArray(this.data);
  // }

  sendData () {
    //  this.data.changeData ('message from project table');

     console.log(this.data.currentData);
  }


  ngOnInit() {
    this.data.currentData.subscribe(message => this.message = message);
  }

  deleteRowIndex(index) {
    this.indexArr.push(index);
    console.log(index);
  }

  deleteRow() {
    for (let i = 0; i < this.indexArr.length; i++) {
      console.log(this.indexArr[i]);
      this.datas.splice(this.indexArr[i], 1);
    }
  }


}
