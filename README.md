# AppwriteBlogExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Set up
Clone this repository. In the terminal, navigate to the repository root and run:  
`npm i`  
and node package manager will handle everything automagically.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Step by step process
### Step 1 - Install appwrite
Follow the [installation instructions](https://appwrite.io/docs/installation) for Appwrite, and run it locally for now.

### Step 2 - Create a project in Appwrite
Once you've installed Appwrite, go ahead and head to the [console](http://localhost/console).  
_Heads up: you'll need to create a user the first time you do this!_  

Once you're in, create a project and copy the project ID into `src/app/app.component.ts` into the `setProject('PROJECT_ID')` line in the constructor.
