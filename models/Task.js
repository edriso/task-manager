const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);
