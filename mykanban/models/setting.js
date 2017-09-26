var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SettingSchema = Schema({
  num_tasks_doing: {type: Number, default: 5},
  col_1_heading:   {type: String, min: 2, max: 50, default: 'To Do'},
  col_2_heading:   {type: String, min: 2, max: 50, default: 'Doing'},
  col_3_heading:   {type: String, min: 2, max: 50, default: 'Done'}
});

module.exports = mongoose.model('Setting', SettingSchema);
