import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
  hideFormula:boolean = false;

  // variables that are used to send data to the FORMULA page
  fieldInput:any;
  formulaInput:any;
  public testArray = [1,2,3,4]
  // ADD FIELDS 
  private fieldArray: Array<any> = []; // to store the field that the user added
  private newAttribute: any = {}; // the value of the field

  constructor() { }

  addField() {

    this.fieldArray.push(this.newAttribute);

  }

  removeField(index) {

    this.fieldArray.splice(index, 1);

  }

  ngOnInit() {
  }

  // SELECT field 
  changeOption(e){
    // toggling the display of "FORMULA"
    if(e.target.value === "Formula"){
    this.hideFormula = !this.hideFormula;      
    } else{
    this.hideFormula = false;
    }    
  }

  save(){
    console.log(this.fieldInput);
    
  }
}
