
class Task {
  constructor(title, deadline) {
    this.id = 1;
    this.title = title;
    this.deadline = deadline;
    this.status = "pending";
  }
}

module.exports = Task;
