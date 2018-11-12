import { Component, OnInit } from '@angular/core';
import { MydataService } from '../../service/mydata.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit {
  users: Object;
  constructor(private data: MydataService) {}

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.users = data['data'];
      // console.log(this.users);
      // console.log(data['data'])
    });
  }
}
