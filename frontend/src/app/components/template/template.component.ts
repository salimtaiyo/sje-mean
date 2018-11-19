import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {

  private fieldArray: Array<any> = []; // to store the field that the user added
  private newAttribute: any = {}; // the value of the field

  checkCode: boolean = true;
  checkId: boolean = true;

  checkArray: Array<any> = [true, true];

  constructor() { }

  addField() {

    this.fieldArray.push(this.newAttribute);

}

  removeField(index) {

    this.fieldArray.splice (index, 1);

  }

  changeValue() {

    this.checkArray[0] = this.checkCode;
    this.checkArray[1] = this.checkId;

    console.log("check code: " + this.checkCode);
    console.log("check id: " + this.checkId);

    console.log(this.checkArray);

  }

  ngOnInit() {

  }
}
