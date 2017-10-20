const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
Todo.findByIdAndRemove('59ea04ede9c5c62470a5f840').then((todo) => {
  console.log(todo);

});
