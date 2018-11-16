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
  dataArray; // the saved array thats being sent to the child component
  dataStorage = [];
  checkAll: Boolean = false;

  constructor(private dataService: MydataService) {}
  ngOnInit() {
    this.dataService.dataUser().subscribe(data => {
      this.dataProject = data['data'];
    });
  }

  transferPick(dataToTransfer) {
    // this.dataProject.length = 0;
    // let arr = dataToTransfer.target.value;

    // let data = this.dataProject.find(item => item._id === arr);
    // this.dataStorage.push(data);
    // console.log(this.dataStorage);
    
    if (dataToTransfer.target.checked) {
      let arr = dataToTransfer.target.value;
      let data = this.dataProject.find(item => item._id === arr);
      this.dataStorage.push(data);
      // this.dataStorage.push(arr);
    } else {
      // remove from the array
      
    }
    // let arr = dataToTransfer.split(',');
    // this.dataStorage.push(arr);
  }

  transferToChild() {
    this.dataArray = this.dataStorage.slice();

  }

  checkallrecords() {
    this.dataStorage = this.dataProject;
  }
}
