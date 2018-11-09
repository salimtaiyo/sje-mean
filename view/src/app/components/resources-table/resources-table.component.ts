import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})
export class ResourcesTableComponent implements OnInit {
  
  constructor(private dataService: PostsService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      res => {
      console.log((res));
      }
    )
  }

}
