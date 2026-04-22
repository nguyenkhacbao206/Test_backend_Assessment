const express = require("express");
const taskRoutes = require("./routes/task.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();
const PORT = 3000;


app.use(errorMiddleware);

// Routes
app.use("/api/tasks", taskRoutes);


app.use(express.json());

app.listen(PORT, () => {
  console.log(`Assessment server running on port ${PORT}`);
});
