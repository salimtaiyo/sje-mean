import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  model: any = {};
  ngOnInit() {}

  onSignup(form: NgForm) {
    console.log(form.value);
    
    this.authService.createUser(
      form.value.email,
      form.value.password,
      form.value.firstName,
      form.value.lastName
    );
  }

  onSubmit() {
    // alert(JSON.stringify(this.model));
    
    this.router.navigate(['/']);
  }
}
