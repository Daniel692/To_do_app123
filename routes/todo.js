const Todo = require("../models/Todo");

const router = require("express").Router();

// routes
// getting the data from the HTML form and saving them inside mongodb and also deleting them by _id

router
  .post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTask = new Todo({ todo });

    // save
    newTask
      .save()
      .then(() => {
        console.log("Successfully added!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Task deleted successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
