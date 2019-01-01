const functions = require('firebase-functions');
const express = require("express");
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.set("view engine", "ejs");

// 1. INDEX ROUTE

app.get("/", function(req, res) {
   res.redirect("/clubs"); 
});

app.get("/clubs", function(req, res) {
  res.render("clubs"); 
});

// 2. NEW ROUTE

// 3. CREATE ROUTE

// 4. SHOW ROUTE

exports.app = functions.https.onRequest(app);

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("The server is running!"); 
});