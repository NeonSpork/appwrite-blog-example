import { Injectable } from '@angular/core';
import { Appwrite } from 'appwrite';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  appwrite = new Appwrite();

  constructor() {
    this.appwrite
      .setEndpoint(process.env.APPWRITE_ENDPOINT as string) // Appwrite Endpoint
      .setProject(process.env.PROJECT_ID as string);
  }

  authenticate(email: string, password: string): boolean {
    let authenticated = false;
    this.appwrite.account.createSession(email, password)
      .then(
        (response) => {
          authenticated = true;
        }, (error) => {
          authenticated = false;
        }
      )
    return authenticated;
  }
}
