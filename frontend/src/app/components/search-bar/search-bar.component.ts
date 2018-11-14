import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() notify:EventEmitter<boolean> = new EventEmitter<boolean>();

  show: boolean = false;

  data: string;

  @Output() typingString = new EventEmitter<string>();

  sendTypingString(data: string) {
    this.typingString.emit(data);
    console.log(data);
  }

  constructor() {}

  onClick():void{
    this.notify.emit();
  }

  ngOnInit() {}
}