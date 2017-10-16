// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if (err) {
//     return console.log('unable to connect to mongo');
//   }
//     console.log('connected to mongod server');
    // db.collection('Todos').insertOne({
    //   text: 'something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('unable to inset todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });
  //   db.collection('users').insertOne({
  //     name: 'brian',
  //     age: '32',
  //     location: 'norfolk'
  //   }, (err, result) => {
  //     if (err) {
  //       return console.log('unable to inset user', err);
  //     }
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  //   });
  // db.close();
  // });
