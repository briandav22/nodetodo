// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo');
  }
    console.log('connected to mongod server');
    // db.collection('Todos').deleteMany({
    //   text: 'Eat Lunch'
    // }).then((result) => {
    //   console.log(result)
    // });

    // db.collection('Todos').deleteOne({
    //   text: 'Eat Lunch'
    // }).then((result) => {
    //   console.log(result)
    // });
    // db.collection('users').deleteMany({name:'brian'});
    db.collection('users').findOneAndDelete({ _id : new ObjectID("59e4f5ad2df1bb1ff87c6ca7")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });
  // db.close();
    });
