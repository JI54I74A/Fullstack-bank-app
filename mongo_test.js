
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
//const url = 'mongodb+srv://jishithamp:Spiderman#777@jishmongo.frxpp.mongodb.net/?retryWrites=true&w=majority&appName=JishMongo'

//connection
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Error connecting to MongoDB:', err.message); // Improved error logging
        return;
    }
    console.log('Connected!');


//database Name
const dbName = 'bankdata';
const db = client.db(dbName);

//new user
var name = 'user' + Math.floor(Math.random()*10000);
var email = name + '@mit.edu';

//insert into customer table/collection
var collection = db.collection('customers');
var doc = {name,email};

collection.insertOne(doc, {w:1}, function(err, result) {
    if (err) {
        console.error('Error inserting document:', err.message);
    } else {
        console.log('Document Inserted:', result.ops);
    }
     

//read from customers database
var customers = db
    .collection('customers')
    .find()
    .toArray(function(err,docs) {
        console.log('collection:',docs);

        //clean up
        // Close the client connection after the operation
     client.close();
    })
})
});

