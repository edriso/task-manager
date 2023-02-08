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
      status: 'fail',
      message: error.errors.name.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        task: newTask,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.errors.name.message,
    });
  }
};

const getTask = async (req, res) => {
  try {
    // taskID is an alias of req.params.id ^_^
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID);
    // const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({
        status: 'fail',
        message: `No task with id: ${taskID}`,
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error,
    });
  }
};

const updateTask = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      task: {},
    },
  });
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        status: 'fail',
        message: `Invalid ID`,
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error,
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
