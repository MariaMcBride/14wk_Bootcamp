const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the jokes routes function from our joke.routes.js file
const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
