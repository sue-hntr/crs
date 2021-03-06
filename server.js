const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const axios = require('axios');

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crs", { useNewUrlParser: true })
mongoose.connect("mongodb://127.0.0.1/crs", { useNewUrlParser: true })
.catch( err => console.log(err));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get('/', function(req, res){
  res.sendFile(__dirname+'/bin/index.html'); // change the path to your index.html
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
