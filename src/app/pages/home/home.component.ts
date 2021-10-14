import { Component, OnInit } from '@angular/core';
import { Appwrite } from 'appwrite';
import { IBlogPost } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appwrite = new Appwrite();

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

  constructor() {
    this.appwrite
      .setEndpoint('http://localhost/v1') // Appwrite Endpoint
      // **********************
      // FIXME Make sure you put your OWN project ID here!
      .setProject('6167e645d1969');
    // **********************

    // this.promise = this.appwrite.database.listDocuments('blog-posts');
    // this.promise.then(function (response) {
    //   console.log(response); // Success
    // }, function (error) {
    //   console.log(error); // Failure
    // });

  }

  ngOnInit(): void {
    this.populate();
  }

  populate() {
    let allPosts = {};
    this.appwrite.database.listDocuments('6167ecc73d849')
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
