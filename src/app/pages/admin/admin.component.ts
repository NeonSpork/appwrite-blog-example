import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
// import { Store } from '@ngxs/store';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // this.loginForm.updateValueAndValidity()
  }

  // handleLogin() {
  //   console.log("Logging in", this.loginForm.value);
  //   let payload = {
  //     email : this.loginForm.value.email,
  //     password: this.loginForm.value.password
  //   }
  //   // this.store.dispatch(new Account.Login(payload))
  // }
}
