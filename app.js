require('dotenv').config();
const express = require('express');
const taskRouter = require('./routes/taskRoutes.js');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const app = express();

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRouter);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is up and running on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
