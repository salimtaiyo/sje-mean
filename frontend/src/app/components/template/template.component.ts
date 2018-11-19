import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/app/service/transfer-data.service';

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

  templateData =[];

  // ADD FIELDS 
  private fieldArray: Array<any> = []; // to store the field that the user added
  private newAttribute: any = {}; // the value of the field

  constructor(private dataToFormula: TransferDataService) { }

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

  // sends data to the FORMULA page
  save(){
    this.dataToFormula.templateData(this.templateData);
  }

  // pushes data from the FIELD to "templateData" variable thats going to be sent to the FORMULA PAGE
  templateArray(e){
    this.templateData.push(e.target.value);
  }


}
