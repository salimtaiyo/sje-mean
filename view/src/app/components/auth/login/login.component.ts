import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signInForm(form: NgForm) {
    console.log(form.value.emailInput, form.value.passwordInput);
    // console.log('hello')

    this.authService.signin(form.value.emailInput, form.value.passwordInput)
  }

}
