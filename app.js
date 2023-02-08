const express = require('express');
const app = express();
const taskRouter = require('./routes/taskRoutes.js');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', taskRouter);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`Server is up and runinng on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
