let tasks = [
  {
    name: 'go to gym',
    completed: true,
  },
];

let task = tasks[0];

const getAllTasks = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tasks,
    },
  });
};

const createTask = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      task: req.body,
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
      task,
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
