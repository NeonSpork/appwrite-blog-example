import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/shared/appwrite.service';
import { environment } from 'src/environments/environment';

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
    if (this.aws.userAuthorized) {
      let confirmation = window.confirm("Are you SURE you want to publish this post?");
      if (confirmation) {
        this.aws.appwrite.account.get().then(
          (account) => {
            const { name, $id } = account as any;
            this.aws.appwrite.database.createDocument(environment.COLLECTION_ID,
              {
                title: this.postFormGroup.get('title')!.value,
                body: this.postFormGroup.get('body')!.value,
                author: name
              },
              ['*'],
              [`user:${$id}`, 'role:blogger', 'team:Bloggers']
            );
            this.postFormGroup.reset();
          }
        );
      }
    }
    else {
      this.router.navigate(['/login']);
    }
  }

}
