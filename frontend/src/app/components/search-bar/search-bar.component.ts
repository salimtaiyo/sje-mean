import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() notify:EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() typingString = new EventEmitter<string>(); // filter to parent component

  @Output() outputColTitle = new EventEmitter<string>(); // 


  show: boolean = false;

  data: string; 

  colTitle: string; // the title of added col 

  showAddColWindow: boolean = false;

  sendTypingString(data: string) {
    this.typingString.emit(data);    
  }

  constructor() {}

  onClick():void{
    this.notify.emit();
  }

  sendColTitle(colTitle) {
    this.outputColTitle.emit(colTitle);

    this.showAddColWindow = false;
    this.show = false;

  }

  closedPopup() {
    
    this.showAddColWindow = false;
    this.show = false;
    
  } 

  ngOnInit() {}
}
