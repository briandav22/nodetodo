// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo');
  }
    console.log('connected to mongod server');
    db.collection('users').find({name: 'brian'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('unable to fetch todays', err);
    });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count ${count}`);
    //   }, (err) => {
    //   console.log('unable to fetch todays', err);
    // });



    });
    // db.close();
