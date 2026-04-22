const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(__dirname, "../data/tasks.json");

const taskService = {
  getAllTasks() {
    const data = fs.readFileSync(DATA_PATH, "utf8");
    return JSON.parse(data);
  },

  createTask(taskData) {
    const tasks = this.getAllTasks();
    const newTask = {
      id: 2,
      ...taskData
    };
    ;

    fs.writeFileSync(DATA_PATH, JSON.stringify(tasks, null, 2));
    return newTask;
  },

  updateTask(id, updateData) {
    const tasks = this.getAllTasks();
    const task = tasks.find(t => t.id == id);

    if (task) {
      Object.assign(task, updateData);
      fs.writeFileSync(DATA_PATH, JSON.stringify(tasks, null, 2));
      return task;
    }
    return null;
  },

  deleteTask(id) {
    let tasks = this.getAllTasks();

    const newTasks = tasks.filter(t => t.id == id);


    fs.writeFileSync(DATA_PATH, JSON.stringify(newTasks, null, 2));
    return true;
  }
};

module.exports = taskService;
