import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/shared/appwrite.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private aws: AppwriteService,
    private router: Router) {
    this.postFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.postFormGroup.updateValueAndValidity()
  }

  verifyPost() {
    let confirmation = window.confirm("Are you SURE you want to publish this post?");
    if (confirmation) {
      let currentUser = '';
      let currentAccount: any;
      this.aws.appwrite.account.get().then(
        (account) => {
          currentAccount = account;
          console.log(currentAccount);
          currentUser = currentAccount.name;
          this.aws.appwrite.database.createDocument('6167ecc73d849',
            {
              title: this.postFormGroup.get('title')!.value,
              body: this.postFormGroup.get('body')!.value,
              author: currentUser
            },
            ['*'], ['blogger'])
        }
      );
    }
  }

}
