import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service';

@Component({
  selector: 'app-projecttitle',
  templateUrl: './projecttitle.component.html',
  styleUrls: ['./projecttitle.component.css']
})
export class ProjecttitleComponent implements OnInit {

  // project title
  projectTitle;

  constructor( private projectHeader: TransferDataService) { }

  ngOnInit() {
  }

  projectSelect(e){
    this.projectTitle = e.target.value;
    this.projectHeader.projectHeader(this.projectTitle);
  } 
  
}
