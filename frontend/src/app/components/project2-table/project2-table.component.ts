import { Component, OnInit, Input } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service';

@Component({
  selector: 'app-project2-table',
  templateUrl: './project2-table.component.html',
  styleUrls: ['./project2-table.component.css']
})

export class Project2TableComponent implements OnInit {

  @Input() datas;
  indexArr:Array<number> = [];
  savedArr:Array<any> = [];
  message;

  constructor( private transferService:TransferDataService ) { }

  ngOnInit() {
    this.transferService.currentMessage.subscribe(
      message => this.message = message
    )
  }

  deleteRowIndex(index) {
    this.indexArr.push(index);
    // console.log(index);
  }

  saveArray(data){
    let dataArray = data.toString().split(',')
    this.savedArr.push(dataArray)
  }

  deleteRow() {
    for (let i = 0; i < this.indexArr.length; i++) {
      console.log(this.indexArr[i]);
      this.datas.splice(this.indexArr[i], 1);
    }
  }

  // emmitter
  newMessage(){

    this.transferService.changeMessage(this.savedArr);
  }
}
