const functions = require('firebase-functions');
const firebase = require("firebase-admin");
const express = require("express");
const app = express();
const path = require('path');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, 'public')));


// 1. INDEX ROUTE

app.get("/", function(req, res) {
   res.redirect("/clubs"); 
});

app.get("/clubs", function(req, res) {
// Retrieve Club Data Function
let database = firebase.database();
const clubsRef = database.ref('Clubs');
clubsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      const childData = childSnapshot.val();
      console.log(childData);
    });
});

  res.render("clubs"); 
});

app.get("/clubs/new", function(req, res) {

  res.render("new"); 
});

// 2. NEW ROUTE

// 3. CREATE ROUTE

// 4. SHOW ROUTE

exports.app = functions.https.onRequest(app);

app.listen(7000, "127.0.0.1", function() {
   console.log("The server is running!"); 
});
