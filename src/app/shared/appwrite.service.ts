import { Injectable } from '@angular/core';
import { Appwrite } from 'appwrite';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  appwrite = new Appwrite();
  userAuthorized = false;

  constructor() {
    this.appwrite
      .setEndpoint(environment.APPWRITE_ENDPOINT) // Appwrite Endpoint
      .setProject(environment.PROJECT_ID);
    this.appwrite.account.getSession('current').then(
      (response: any) => {
        console.log(response);
        this.userAuthorized = response.current;
      },
      (error) => {
        this.userAuthorized = false;
      }
    );
    if (this.userAuthorized === undefined) {
      this.userAuthorized = false;
    }
  }
}
