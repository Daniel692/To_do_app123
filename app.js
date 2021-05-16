const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connection to mongodb
// using mongoose to simply connect to a mongodb database,
// if does not exist it will create it
mongoose.connect("mongodb://localhost/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
// adding body parser and static folder
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// routes
// Separating routes to different files to avoid cluttering
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// Server conf
app.listen(3000, () => console.log("Server started on port 3000"));
