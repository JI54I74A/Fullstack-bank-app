

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/*const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);*/
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Successfully connected to MongoDB");
    
     // Get the database object
     const database  = client.db('myproject');
     const customers = database.collection('customers');
    
        // Log the collection reference
        console.log('Using collection: customers');

     // Create new user data
    var name = 'user' + Math.floor(Math.random() * 10000);
    var email = name + '@mit.edu';

     // Insert the new user document into the 'customers' collection


     const docs = { name, email };
     //const options = { ordered: true };

      // Insert multiple documents
     const result = await customers.insertOne(docs)
     
     
    console.log('Document Inserted:', result);

     // Read from customers database
   
     // Fetch and log the collection documents
     const allCustomers = await customers.find().toArray();
     console.log('All Documents in Collection:', allCustomers);


} catch (err) {
    console.error('Error:', err.message);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); 




/*
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB");

    const db = client.db('myproject');
    console.log("Using database:", db.databaseName); // Log the current database name

    // Insert sample data to verify
    const collection = db.collection('customers');
    const doc = { name: 'testUser', email: 'testUser@mit.edu' };
    const result = await collection.insertOne(doc);
    console.log('Document Inserted:', result.insertedId);


    const customers = await collection.find().toArray();
console.log('Customers in collection:', customers);

    // List databases
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:");
    databases.databases.forEach(db => console.log(` - ${db.name}`));
    
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.close();
  }
}

run().catch(console.dir); */



/*
const { MongoClient } = require('mongodb');

// Replace the placeholder with your MongoDB connection string
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Successfully connected to MongoDB");

        // Get the database object
        const database  = client.db('myproject');
        const customers = database.collection('customers');

        // Create a new collection named 'customers'
       
        console.log('Using collection: customers');

        // Optionally, you can insert a document into the newly created collection
        const doc = [{ name: 'John Doe', email: 'john.doe@example.com'} ,
            { name: 'ANI', email: 'ani.doe@example.com'}
        ];
        const options = { ordered: true };

        const result = await customers.insertMany(doc, options);
        console.log('Document Inserted:', result);
        console.log('Collection:', doc); 

          // Fetch and log the collection documents
          const allCustomers = await customers.find().toArray();
          console.log('All Documents in Collection:', allCustomers);

    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        // Close the client connection
        await client.close();
    }
}

run().catch(console.dir);*/
