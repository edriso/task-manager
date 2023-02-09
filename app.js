const express = require('express');
const app = express();
require('dotenv').config();
const taskRouter = require('./routes/taskRoutes.js');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRouter);
app.use(notFound);

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
