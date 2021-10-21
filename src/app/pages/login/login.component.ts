import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/shared/appwrite.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  loginSuccess: boolean | null = null;

  constructor(private formBuilder: FormBuilder,
    private aws: AppwriteService,
    private router: Router) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.loginFormGroup.updateValueAndValidity()
  }

  handleLogin() {
    console.log("starting");
    this.aws.appwrite.account.createSession(
      this.loginFormGroup.get('email')?.value,
      this.loginFormGroup.get('password')?.value)
      .then(
        (response: any) => {
          console.log("good response");
          console.log(response);
          this.aws.userAuthorized = response.current;
          console.log(this.aws.userAuthorized);
          this.loginSuccess = true;
          this.router.navigate(['/new-post']);
        }, (error) => {
          console.log("error response");
          console.log(error);
          this.aws.userAuthorized = false;
          console.log(this.aws.userAuthorized);
          this.loginSuccess = false;
          this.loginFormGroup.reset();
        }
      )
  }
}
