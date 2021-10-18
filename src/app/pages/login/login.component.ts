import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/shared/appwrite.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  loginFailure: boolean | null = null;

  constructor(private formBuilder: FormBuilder,
    private aws: AppwriteService,
    private router: Router,
    private auth: AuthService) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.loginFormGroup.updateValueAndValidity()
  }

  handleLogin() {
    this.aws.appwrite.account.createSession(
      this.loginFormGroup.get('email')?.value,
      this.loginFormGroup.get('password')?.value)
      .then(
        (response) => {
          console.log(response);
          this.loginFailure = false;
          this.auth.userAuthorized = true;
          this.router.navigate(['/new-post']);
          console.log(this.auth.userAuthorized);
        }, (error) => {
          this.loginFormGroup.reset();
          this.loginFailure = true;
        }
      )
  }
}
