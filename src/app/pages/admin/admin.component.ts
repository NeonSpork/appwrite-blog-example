import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppwriteService } from 'src/app/shared/appwrite.service';
// import { Store } from '@ngxs/store';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginFormGroup: FormGroup;
  loginFailure: Boolean | null = null;

  constructor(private formBuilder: FormBuilder, private aws: AppwriteService) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.loginFormGroup.updateValueAndValidity()
  }

  handleLogin() {
    this.aws.appwrite.account.createSession(this.loginFormGroup.get('email')?.value, this.loginFormGroup.get('password')?.value).then(
      (response) => {
        console.log("Success?");
      }, (error) => {
        console.log("FAILURE.");
      }
    )
  }
}
