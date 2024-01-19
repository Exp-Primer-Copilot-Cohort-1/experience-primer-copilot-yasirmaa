// Create web server

// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Comment = require("./models/comment");
const app = express();

// Connect to database
mongoose.connect("mongodb://localhost/comments");

// Set view engine
app.set("view engine", "ejs");

// Set middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set routes
app.get("/", (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { comments: comments });
    }
  });
});

app.post("/", (req, res) => {
  Comment.create(req.body.comment, (err, comment) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server started");
});