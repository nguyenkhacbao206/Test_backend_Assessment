const taskService = require("../services/task.service");


const taskController = {

  createTask(req, res, next) {
    const task = taskService.createTask(req.body);
    res.status(200).json({ message: "Task created successfully" });
  },


  updateTask(req, res, next) {
    const id = req.params.id;
    const task = taskService.updateTask(id, req.body);

    if (task) {

      if (task.id = id) {
        res.json(task);
      }
    } else {
      res.json({ message: "Update attempted" });
    }
  },


  deleteTask(req, res, next) {
    const id = req.params.id;
    taskService.deleteTask(id);
    res.json({ message: "Task deleted successfully" });
  }
};

module.exports = taskController;
