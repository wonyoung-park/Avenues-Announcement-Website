const functions = require('firebase-functions');
const express = require("express");
const app = express();
var path = require('path');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, 'public')));


// 1. INDEX ROUTE

app.get("/", function(req, res) {
   res.redirect("/clubs"); 
});

app.get("/clubs", function(req, res) {
  // Get a reference to the database service

  res.render("clubs"); 
});

// 2. NEW ROUTE

// 3. CREATE ROUTE

// 4. SHOW ROUTE

exports.app = functions.https.onRequest(app);

app.listen(7000, "127.0.0.1", function() {
   console.log("The server is running!"); 
});
