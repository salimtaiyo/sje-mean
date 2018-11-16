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
  mappedData;
  

  constructor( private transferService:TransferDataService ) { }

  ngOnInit() {
    this.transferService.currentMessage.subscribe(
      message => this.message = message
    )
    
  }

  deleteRowIndex(id) { this.indexArr.push(id);}

  saveArray(data){
    // let dataArray = data.toString().split(',')
    this.savedArr.push(data)
    console.log(this.savedArr);
    
  }

  deleteRow() {
    for (let i = 0; i < this.indexArr.length; i++) {
      let index = this.datas.findIndex(item => item._id === this.indexArr[i]);
      this.datas.splice(index,1);
      index = null;
    }
    this.indexArr.length =0;
  }
 
  // emmitter
  newMessage(){
    this.transferService.changeMessage(this.savedArr);
  }
}
