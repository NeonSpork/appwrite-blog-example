import { Component } from '@angular/core';
import { AppwriteService } from './shared/appwrite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appwrite-blog-example';


  constructor(public aws: AppwriteService) {
  }
  signOut() {
    this.aws.appwrite.account.deleteSession('current');
    this.aws.userAuthorized = false;
  }
}
