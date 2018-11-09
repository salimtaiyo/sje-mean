import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // signup
  createUser(email: string, password:string){
    const authData: AuthData = { email, password};
    this.http.post("http://localhost:3000/signup", authData)
      .subscribe(res => {
        console.log(res);
      },error => {
        console.log(error)
      })
  }

  // login
  signin(email:string, password: string){
    const authData: AuthData = { email, password};
    // console.log(authData.email)
    this.http
        .post("http://localhost:3000/login", authData)
        .subscribe(res => {
          console.log(res, "logged in")
        },
        error => {
          console.log(error)
        })

  }
}
