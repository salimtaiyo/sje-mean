import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/service/mydata.service';
import { ProjectToFormularService } from 'src/app/service/project-to-formular.service';

@Component({
  selector: 'app-formula-table',
  templateUrl: './formula-table.component.html',
  styleUrls: ['./formula-table.component.css']
})

export class FormulaTableComponent implements OnInit {

  public dataProject; // data thats fetched from the DB
  dataArray = []; // saves the value

  // inline editing valuable

  showEditTable: boolean = false;
  editRowID: number;

  checkEditRow(val) {
    this.editRowID = val;
  }

  submitUpdate() {

  }

    message: any[];

    public constructor(private data: ProjectToFormularService, private dataService: MydataService) {

    }

  ngOnInit() {

    this.dataService.dataUser().subscribe(data => {

      this.dataProject = data['data'];
      console.log(this.dataProject);

    });

    this.data.currentData.subscribe(message => this.message = message);
  }

}
