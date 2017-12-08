# Readable Project

This is assessment project for React & Redux. The README provides a quick way of how to run the project as well as the project structure.

## To run the project:

```bash
# install all project dependencies
$ npm install

# start the development server
$ npm start
```

## What You're Getting
```bash
├── .gitignore - # any files/folders mentioned in this file will be ignored (will not be tracked) during git operations
├── CONTRIBUTING.md - # Although this file may not be relevant for this project however this usually set the rules/quidelines on how to contribute to a project
├── package.json # npm package manager file.
├── package-lock.json # This is somewhat simialr to npm-shrinkwrap.json file but with some different attributes.
├── README.md - # This file.
├── node_modules # This folder contains all npm packages and their dependencies
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── .env # This file contains environment variables. We are defining our front-end and api-server configuraiton here.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── Index.js # This is the root of your app. Contains redux store combine reducers, BrowserRouter and Provider.
    ├── Index.css # This file contains all app styles.
    └── components # This folder and subfolders contains all the components
        └── categories # This folder has all the components related to categories
            ...
        └── comments # This folder has all the components related to comments
            ...
        └── posts # This folder has all the components related to posts
            ...
        ├── Index.js # This file contains all the named export compnents.
        ├── Wrapper.js # This file holds all the main or parent components like navigation, Inner/Middle content etc.
        ├── App.js # This file maps state and prop
        ├── Home.js # This file has home component
        ├── PageNotFound.js # Fallback page for 404s
        ├── Sortlist.js # This component resides inside the Postlist component. Sorting by votes and timestamp can be performed. Also a new post can be added from this component.
    └── actions # This folder has 3 action crators i.e categories, posts and comments.
            ...
    └── reducers This folder has 3 reducers i.e categories, posts and comments.
            ...
    └── utils
        └── api.js # This single file contains all the API routes.
```

