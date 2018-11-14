import { Component, OnInit, Input } from '@angular/core';
import { MydataService } from 'src/app/service/mydata.service';
import { ProjectToFormularService } from 'src/app/service/project-to-formular.service';


@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {

  private dataProject; // data thats fetched from the DB
  dataArray; // saves the value
  dataStorage = [];

  message: string;

  constructor(private dataService: MydataService) {}

  ngOnInit() {
    this.dataService.dataUser().subscribe(data => {
      this.dataProject = data['data'];
      console.log(this.dataProject);
    });
  }

  transferPick(dataToTransfer) {
    let arr = dataToTransfer.split(',');
    this.dataStorage.push(arr);
  }

  transferToChild() {
    return this.dataArray = this.dataStorage.slice();
  }
}
