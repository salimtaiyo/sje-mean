import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project2-table',
  templateUrl: './project2-table.component.html',
  styleUrls: ['./project2-table.component.css']
})
export class Project2TableComponent implements OnInit {
  @Input() datas;
  indexArr:Array<number> = []
  constructor() { }

  ngOnInit() {
  }

  deleteRowIndex(index){
    this.indexArr.push(index);
    console.log(index);
  }

  deleteRow(){
    for(let i =0; i<this.indexArr.length; i++){
      console.log(this.indexArr[i]);
      this.datas.splice(this.indexArr[i],1)
    }
  }
}
