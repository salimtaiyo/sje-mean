import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditingService {

  constructor(private http: HttpClient) { }

  postCustomer(customer): Promise {
    return this.http.post('/api/customers', customer)
                    .toPromise()
                    .then((data) => data);
  }

  


}
