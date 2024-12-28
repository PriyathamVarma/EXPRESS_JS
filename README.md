# EXPRESS js

This file teaches you to create an Express Server.

## Steps to create a Server

### Basic setup

1. npm init -y    --> To install NPM
2. npm install express  --> To install express dependencies

### Building the app

1. Create index.js --> First point of contact
2. Look for the file for how to do it?
3. Run the app using node <filename>
4. Mostly you will get 4** error bcoz there are no API Routes

### Creating Routes

1. Go to index.js again and have a look at the configuration for routes section
 > Install nodemon for hot-reloading
 >> npm i -D nodemon --> -D only for developers not in production
 >> Go to package.json --> change scripts -> "start":'echo .....' to "start":'node index.js'
 >> Go to package.json --> add to scripts -> "dev":'nodemon index'

### Creating html files folder

1. Create a folder called public
2. add html files to a subfolder called pages
3. Import path module into the index.js
4. Create a path for accessing the file
```
res.sendFile(path.join(__dirname,'public','pages','index.html'));

```
### Creating an API end point

1. Create a route to send the array of objects
2. When the route is hit the array will be returned
3. Look in the data section of index.js

## Pre-requesties

1. [NPM](https://www.npmjs.com/)
2. [Node](https://nodejs.org/en/)

## External Links

1. [Youtube](https://www.youtube.com/watch?v=L72fhGm1tfE)
2. [Official Docs](https://expressjs.com/en/starter/installing.html)
