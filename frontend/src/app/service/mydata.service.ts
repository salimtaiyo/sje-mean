import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  constructor(private http: HttpClient) {}

  getUser(pagesize:number,page:number) {
    const paginationQuery = `?pagesize=${pagesize}&page=${page}`;
    return this.http.get('http://localhost:3000/data'+ paginationQuery);
  }

  dataUser() {
    // const paginationQuery = `?pagesize=${pagesize}&page=${page}`;
    return this.http.get('http://localhost:3000/data');
  }
  postUser(resourceName:string, resourceCode: Number){
    const newData = {resourceName, resourceCode};
    this.http.post('http://localhost:3000/data', newData)
      .subscribe(res => {
        console.log(res);
      })
  }
}
