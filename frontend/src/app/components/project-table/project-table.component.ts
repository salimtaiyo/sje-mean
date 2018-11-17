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

  transferPick(value) {
    // if the checkbox is checked
    if (value.target.checked) {
      let arr = value.target.value;
      let data = this.dataProject.find(item => item._id === arr);
      this.dataStorage.push(data);

      // if the user unchecks the checkbox 
    } else {
      let arr = value.target.value;
      let data = this.dataStorage.findIndex(item => item._id === arr);
      this.dataStorage.splice(data,1);
    }
  }

  transferToChild() {
    this.dataArray = this.dataStorage.slice();
  }

  checkallrecords(event) {
    this.dataStorage = this.dataProject.slice();
    this.checkAll = event.target.checked;
  }

  clearallRecords(event) {
    this.dataStorage.length = 0;
    this.checkAll = !event.target.checked;
  }
}
