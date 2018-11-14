import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/service/mydata.service';

@Component({
  selector: 'app-formula-table',
  templateUrl: './formula-table.component.html',
  styleUrls: ['./formula-table.component.css']
})
export class FormulaTableComponent implements OnInit {

  private dataProject; // data thats fetched from the DB
  dataArray=[]; // saves the value 

  constructor(private dataService:MydataService) {}

  ngOnInit() {
    this.dataService.dataUser().subscribe(data => {
      this.dataProject = data['data'];
      console.log(this.dataProject)
    });
  }

}
