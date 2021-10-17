import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userAuthorized: Boolean;

  constructor() {
    this.userAuthorized = false;
  }
}
