import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}
  model: any = {};
  ngOnInit() {}

  onSignup(form: NgForm) {
    this.authService.createUser(
      form.value.emailInput,
      form.value.passwordInput,
      form.value.name,
      form.value.lastname
    );
  }

  onSubmit() {
    alert(JSON.stringify(this.model));
  }
}
