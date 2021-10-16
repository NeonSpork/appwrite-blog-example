import { Injectable } from '@angular/core';
import { Appwrite } from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  appwrite = new Appwrite();

  constructor() {
    this.appwrite
      .setEndpoint('http://localhost/v1') // Appwrite Endpoint
      // **********************
      // FIXME Make sure you put your OWN project ID here!
      .setProject('6167e645d1969');
   }
}
