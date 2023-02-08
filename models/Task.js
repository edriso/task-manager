const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
    maxlength: [30, 'Name can not be more than 30 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
