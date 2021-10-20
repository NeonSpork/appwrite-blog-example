import { Component } from '@angular/core';
import { AppwriteService } from './shared/appwrite.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appwrite-blog-example';


  constructor(private aws: AppwriteService,
    public auth: AuthService) {
  }
  signOut() {
    this.aws.appwrite.account.deleteSession('current');
    this.auth.userAuthorized = false;
  }
}
