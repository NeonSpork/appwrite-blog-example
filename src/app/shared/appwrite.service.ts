import { Injectable } from '@angular/core';
import { Appwrite } from 'appwrite';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  appwrite = new Appwrite();
  userAuthorized: boolean;

  constructor() {
    this.appwrite
      .setEndpoint(environment.APPWRITE_ENDPOINT) // Appwrite Endpoint
      .setProject(environment.PROJECT_ID);
    this.userAuthorized = false;
  }

  authenticate(email: string, password: string): boolean {
    let payload: any = this.appwrite.account.createSession(email, password)
      .then(
        (response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        }
      )
    if (payload.current != undefined) {
      this.userAuthorized = payload.current;
    }
    else {
      this.userAuthorized = false;
    }
    return this.userAuthorized;
  }
}
