import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() notify:EventEmitter<boolean> = new EventEmitter<boolean>();

  show: boolean = false;
  constructor() {}

  onClick():void{
    this.notify.emit()
  }

  ngOnInit() {}
}
