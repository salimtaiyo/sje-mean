import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  private dataTemplate = new BehaviorSubject([]);
  data = this.dataTemplate.asObservable();

  // for data from template to forluma (check column display or not)

  private checkStatus = new BehaviorSubject([]);
  check = this.checkStatus.asObservable();

  constructor() { }

  changeMessage(message) {
    this.messageSource.next(message);
  }

  templateData(data){
    this.dataTemplate.next(data);
  }

  templateBool (check) {
    this.checkStatus.next(check);
  }
}
