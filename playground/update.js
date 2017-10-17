// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo');
  }
    console.log('connected to mongod server');

  db.collection('users').findOneAndUpdate({
    _id : new ObjectID('59e66d159897c0c427cd5ffb')
  },{
    $set: {
      name:'bob'
    },
    $inc: {
      age: 1
    }
  },
    {
      returnOrginal: false
    }).then((result) => {
    console.log(result)
  })

  // db.close();
    });
