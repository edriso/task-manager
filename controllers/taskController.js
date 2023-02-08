const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tasks: [],
    },
  });
};

const createTask = async (req, res) => {
  const task = await Task.create({
    name: req.body.name,
    completed: req.body.completed ? true : false,
  });

  res.status(201).json({
    status: 'success',
    data: {
      task,
    },
  });
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
