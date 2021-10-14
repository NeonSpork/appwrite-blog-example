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

### Launch a local version of the `appwrite-blog-example`
In a terminal in the root folder of the repository run `npx ng serve`.  
(The `npx` command will ensure you can run this with the locally installed `@angular/cli` rather than requiring a global install)  

In a browser, open `http://localhost:4200`, this will automatically forward you to the `/home` page where the blog is!

### Create a blog post
Go to `http://localhost:4200/admin`, sign in and fill in the form to make a blogpost! Head on back to `http://localhost:4200/` and read it in all its glory! (Refresh the page if necessary)
