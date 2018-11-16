import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {

  private fieldArray: Array<any> = []; // to store the field that the user added
  private newAttribute: any = {}; // the value of the field

  constructor() { }

  addField() {

    this.fieldArray.push(this.newAttribute);

}

  removeField(index) {

    this.fieldArray.splice (index, 1);

  }

  ngOnInit() {
  }

}
