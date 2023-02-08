const express = require("express");
const app = express();
const taskRouter = require("./routes/taskRoutes.js");

// middleware
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is up and runinng on port ${port}...`);
});
