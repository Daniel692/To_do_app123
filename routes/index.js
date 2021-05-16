const Todo = require("../models/Todo");

const router = require("express").Router();

// Routes
// Using the database and sending the data
router.get("/", async (req, res) => {
  const allTasks = await Todo.find();
  res.render("index", { todo: allTasks });
});

module.exports = router;
