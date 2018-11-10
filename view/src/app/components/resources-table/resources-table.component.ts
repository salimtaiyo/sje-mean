import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit {
  tableData:any;
  constructor(private dataService: PostsService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      res => this.tableData = res['data']
    )
  }

}
