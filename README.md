# AppwriteBlogExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Step by step process
### Install all the angular stuff with node package manager
Clone this repository. In the terminal, navigate to the repository root and run:  
`npm i`  
and node package manager will handle everything automagically.

### Install appwrite
Follow the [installation instructions](https://appwrite.io/docs/installation) for Appwrite, and run it locally for now.

### Create a project in Appwrite
Once you've installed Appwrite, go ahead and head to the [console](http://localhost/console).  
_Heads up: you'll need to create a user the first time you do this!_  

Once you're in, create a project and copy the project ID into `src/app/app.component.ts` into the `setProject('PROJECT_ID')` line in the constructor.

### Create a user for yourself in the Appwrite project
This user will be the "admin" and will have access to the page where you can create and manage blog posts.  

In the console page for your project go the the Users page and Add User for yourself.

### Create a blogger role in the project
Go to Users - Teams and hit `Add Team`. Let's call it "Bloggers" for now.  

In the Bloggers team overview, add your user to the members.
1. Hit `Add Member`
2. Fill in the email you used for your user
3. Add a user name
4. Under roles _**remove**_ `owner` and _**add**_ `blogger`

**NOTE! The role is important for later so don't forget.**

### Create a "blog-post" document collection in the project
1. Head to the `Database` page in your project
2. Click `Add Collection` and call it **blog-posts**
  - NOTE: You _can_ call it something else. But if you do, make sure you _also_ update the `.listDocument()` API call in `src/app/pages/home/home.component.ts` accordingly!
3. In the collection settings you need to add 3 rules:
  - Label: author / Key: name / Rule Type: Text / Required: True
  - Label: title / Key: title_text / Rule Type: Text / Required: True
  - Label: body / Key: body_text / Rule Type: **Markdown** / Required: True
  - Note that all these rules are set to Required, and especially important is that the third rule for the blog body is of type Markdown.
4. You also need to add Permissions:
  - Read Access: `*` (everyone should be able to _read_ the blog)
  - Write Access: Set this to the `blogger` role we created earlier!

### Launch a local version of the `appwrite-blog-example`
In a terminal in the root folder of the repository run `npx ng serve`.  
(The `npx` command will ensure you can run this with the locally installed `@angular/cli` rather than requiring a global install)  

In a browser, open `http://localhost:4200`, this will automatically forward you to the `/home` page where the blog is!

### Create a blog post
Go to `http://localhost:4200/admin`, sign in and fill in the form to make a blogpost! Head on back to `http://localhost:4200/` and read it in all its glory! (Refresh the page if necessary)
