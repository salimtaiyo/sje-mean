import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MydataService } from 'src/app/service/mydata.service';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  private dataProject; // data thats fetched from the DB
  dataArray; // saves the value
  dataStorage = [];
  checkAll: Boolean = false;

  constructor(private dataService: MydataService) {}
  ngOnInit() {
    this.dataService.dataUser().subscribe(data => {
      this.dataProject = data['data'];
      console.log(this.dataProject);
    });
  }

  transferPick(dataToTransfer) {
    console.log(dataToTransfer);
    debugger;
    let arr = dataToTransfer.target.value.split(',');
    if (dataToTransfer.target.checked) {
      // console.log

      this.dataStorage.push(arr);
    } else {
      // remove from the array
    }
    // let arr = dataToTransfer.split(',');
    // this.dataStorage.push(arr);
  }

  transferToChild() {
    return (this.dataArray = this.dataStorage.slice());
  }
  modelChanged(newObj) {
    console.log('=================');
    console.log(newObj);
  }

  checkallrecords() {
    this.dataStorage = this.dataProject;
    console.log(this.dataStorage);
  }
}
