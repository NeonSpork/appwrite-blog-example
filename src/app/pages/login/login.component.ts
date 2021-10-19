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
  loginSuccess: boolean | null = null;

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
    this.loginSuccess = this.aws.authenticate(
      this.loginFormGroup.get('email')?.value,
      this.loginFormGroup.get('password')?.value)
    if (this.loginSuccess) {
      this.auth.userAuthorized = true;
      this.router.navigate(['/new-post']);
    }
    else {
      this.loginFormGroup.reset();
    }
  }
}
