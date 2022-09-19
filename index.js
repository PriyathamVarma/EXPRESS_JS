// this file is for creating the express server

// IMPORTS

const express = require('express'); // this imports express deps
const app = express(); // this stores the instance of express
const PORT = process.env.PORT || 8001; // Port to run the app on, or operator because the server deployed will have diff PORT


// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// Request is the incoming API
// Response is what the server gives back


app.listen(PORT,
    () => {console.log(`App is running at http://localhost:${PORT}`)}
    ); // running the app on PORT --> takes two args 1.PORT and 2.anonymous function 

// Getting the link
console.log(`http://localhost:${PORT}`);


// to run, node index.js in CLI