const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

// var id = '59e8a58d3e439f275c7afbf811';
//
// if (!ObjectId.isValid(id)){
//   console.log('id not valid');
// };
//
User.findById('59e77554c2e6cd27fc76a566').then((user)=>{
  if (!user) {
    return console.log('unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('todo', todo)
// });

// Todo.findById(id).then((todobyid) => {
//   if (!todobyid){
//     return console.log('id not found');
//   }
//   console.log('todos by id',todobyid )
// }).catch((e) => console.log(e));
