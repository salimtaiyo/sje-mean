import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectToFormularService {

  private dataTransfer = new BehaviorSubject <any[]> ([0, 1, 2, 3, 'four']);
  currentData = this.dataTransfer.asObservable();

  constructor() {

  }

  changeData (data: any[]) {
    this.dataTransfer.next(data);
  }

}
