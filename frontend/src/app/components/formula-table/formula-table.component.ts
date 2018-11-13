import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../resources-table/filter.pipe';

@Component({
  selector: 'app-formula-table',
  templateUrl: './formula-table.component.html',
  styleUrls: ['./formula-table.component.css']
})
export class FormulaTableComponent implements OnInit {

  name = 'Angular';

  constructor() { }

  ngOnInit() {
  }

}
