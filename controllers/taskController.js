const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.errors.name.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.errors.name.message,
    });
  }
};

const getTask = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      //   task,
      id: req.params.id,
    },
  });
};

const updateTask = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      task: {},
    },
  });
};

const deleteTask = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
