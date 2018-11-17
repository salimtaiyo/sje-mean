import { Component, OnInit, Input } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service';

@Component({
  selector: 'app-project2-table',
  templateUrl: './project2-table.component.html',
  styleUrls: ['./project2-table.component.css']
})

export class Project2TableComponent implements OnInit {

  @Input() datas;
  indexArr:Array<any> = [];
  savedArr;
  message;
  mappedData;
  

  constructor( private transferService:TransferDataService ) { }

  ngOnInit() {
    this.transferService.currentMessage.subscribe(
      message => this.message = message
    )
    
  }

  deleteRowIndex(...arr) { 
    let event = arr[0];
  
    if(event.target.checked){
      this.indexArr.push(event.target.value);
    } 
    
    else{
      let index = this.indexArr.findIndex(item => item === event.target.value)
      this.indexArr.splice(index,1);
    }
  }

  deleteRow() {
    for (let i = 0; i < this.indexArr.length; i++) {
      let index = this.datas.findIndex(item => item._id === this.indexArr[i]);
      this.datas.splice(index,1);
      index = null;
    }
    
    this.indexArr.length =0;
  }

  saveArray(){
    this.savedArr = this.datas.slice(); 
    this.transferService.changeMessage(this.savedArr);
  }
}
