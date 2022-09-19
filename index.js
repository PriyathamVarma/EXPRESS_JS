// this file is for creating the express server

// IMPORTS

const express = require('express'); // this imports express deps
const app = express(); // this stores the instance of express
const PORT = process.env.PORT || 8001; // Port to run the app on, or operator because the server deployed will have diff PORT

// path modeule for loading path files
const path = require('path');

// Setting static folder
app.use(express.static(path.join(__dirname,'public','pages')));

// ROUTES

// Request is the incoming API
// Response is what the server gives back

// Simple route '/'
app.get('/', (req, res) => {
    res.send('<h1>Hello Blockhhh</h1>')
  })

// Files route '/files'
/*app.get('/files', (req, res) => {
    //res.sendFile(path.join(__dirname,'public','pages','index.html'));
    
  })*/

//   API route
// Data
// Get the data from data -> Users.js
const Users = require('./data/Users');

app.get('/api/users',(req,res) => {

    // Return the Users array as a JSON
    res.json(Users);

});

app.listen(PORT,
    () => {console.log(`App is running at http://localhost:${PORT}`)}
    ); // running the app on PORT --> takes two args 1.PORT and 2.anonymous function 


// to run, node index.js in CLI
// or npm run dev if in package.json