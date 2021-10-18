import { Component, Input, OnInit } from '@angular/core';

import { IBlogPost } from 'src/app/interfaces';
import { AppwriteService } from 'src/app/shared/appwrite.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Initialize an empty IBlogPost interface
  blog_posts: IBlogPost = {
    sum: 0,
    documents: [{
      collection: '',
      id: '',
      permissions: {
        read: [''],
        write: ['']
      },
      author: '',
      title: '',
      body: ''
    }]
  };

  constructor(private aws: AppwriteService,
    public auth: AuthService) {

  }

  ngOnInit(): void {
    this.populate();
  }

  populate() {
    this.aws.appwrite.database.listDocuments('6167ecc73d849')
      .then((response) => {
        this.blog_posts = JSON.parse(JSON.stringify(response));
        console.log("SUCCESS");
        console.log(response);
      }, (error) => {
        this.blog_posts = JSON.parse(JSON.stringify(error));
        console.log("ERROR");
        console.log(error);
      });
  }

}
