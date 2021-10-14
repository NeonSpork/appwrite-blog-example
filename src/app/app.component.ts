import { Component } from '@angular/core';
import { Appwrite } from 'appwrite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appwrite-blog-example';
  appwrite = new Appwrite();

  constructor() {
    this.appwrite
      .setEndpoint('http://localhost/v1') // Appwrite Endpoint
      // **********************
      // FIXME Make sure you put your OWN project ID here!
      .setProject('6167e645d1969');
      // **********************
  }

}
