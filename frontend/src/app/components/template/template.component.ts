import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {

  hideFormula: boolean = false;

  // variables that are used to send data to the FORMULA page
  fieldInput: any;
  formulaInput: any;

  templateData = [];

  // ADD FIELDS

  private fieldArray: Array<any> = []; // to store the field that the user added
  private newAttribute: any = {}; // the value of the field

  // check the box of left table

  checkCode: boolean = false; // for code column
  checkId: boolean = false; // for id column

  checkArray: Array<any> = [true, true]; // to store the status of two column

  constructor(private dataToFormula: TransferDataService) { }

  addField() { // to add field of right table

    this.fieldArray.push(this.newAttribute);

  }

  removeField(index) { // remove the field of the right table

    this.fieldArray.splice(index, 1);

  }

  changeCode(e) { // for the code column

    // if the user checked the option (true), the value of the array will go (false).

    if (e.target.checked === true) {

      this.checkArray[0] = false;

    } else {

      this.checkArray[0] = true;

    }

    // console.log('code:' + e.target.checked);


    // console.log(this.checkArray);

  }

  changeId(e) { // for the id column

    if (e.target.checked === true) {

      this.checkArray[1] = false;

    } else {

      this.checkArray[1] = true;

    }

    // console.log('id:' + e.target.checked);

    // console.log (this.checkArray);

  }

  sendIfChange() { // send to the formula

    this.dataToFormula.templateBool(this.checkArray);

  }

  // SELECT field
  changeOption(e) {

    // toggling the display of "FORMULA"

    if (e.target.value === "Formula") {
    this.hideFormula = !this.hideFormula;
    } else {
    this.hideFormula = false;
    }
  }

  // sends data to the FORMULA page

  save() {
    this.dataToFormula.templateData(this.templateData);
  }

  // pushes data from the FIELD to "templateData" variable thats going to be sent to the FORMULA PAGE

  templateArray(e) {
    this.templateData.push(e.target.value);
  }

  ngOnInit() {

  }

}
