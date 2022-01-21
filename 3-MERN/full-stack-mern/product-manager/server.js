// use express to create a web API
const express = require('express');
const cors = require('cors');

// create an instance of express and store it in the variable "app"
const app = express();
const port = 8000;
const db_name = 'productmgr'; // change this part for each new project

// Immediately execute the import mongoose.config.js function
require('./server/config/mongoose.config')(db_name);
app.use(cors()); // this allows the express application (backend) to share information and resources with the react app client (frontend)
app.use(express.json()); // allows the application to read JSON
app.use(express.urlencoded({ extended: true })); // allows the application to extract form information
// you can write it like this too --> app.use(express.json(), express.urlencoded({extended:true}), cors());
app.use(express.static('images')) // tell the server where to upload images to

// this routes import should be below the "app.use() commands above"
require('./server/routes/product.routes')(app) // passing the app object to the routes so the routes can do this like "app.get, app.put, app.post, etc;"

app.listen(port, () => console.log(`Listening on port: ${port}`)); // app listening for requests to respond to at a certain port --> 8000