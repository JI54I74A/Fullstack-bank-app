
const { error } = require('jquery');
const { MongoClient, ReturnDocument, ObjectId  } = require('mongodb');
const uri             = 'mongodb://localhost:27017';
let database          = null;

//connect to Mongo
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Successfully connected to MongoDB server");

     // connect to myproject database 
     database  = client.db('myproject');
 
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
// Create user
async function create(name, email, password) {
    try {
      const users = database.collection('users');  // Collection of users
      const doc   = { name, email, password, balance: 0 }; // Document to insert
      const result = await users.insertOne(doc);   // Insert user document
      console.log('User inserted:', result);
      const findUser = await users.findOne({email}); 
      console.log('findUser:',findUser)
      return findUser;  // Return the insertion result
    } catch (err) {
      console.error('Error inserting user:', err.message);
      throw err;  // Throw error so it can be caught in the calling function
    }
  }
  
  // login
async function login(email, password) {
  try {
    const users = database.collection('users');  // Collection of users
    const findUser = await users.findOne({email});   // finding existing user document
    console.log('findUser:',findUser)
    if(findUser && findUser !== null) {
      console.log('User email is existing:', email);
      /*if(password == findUser.password) {
        console.log('User password matches:',  password);
      }
      else {
        console.log('Incorrect password:',  password);
      }*/
    }
    else {
      throw new Error('User not found in the DB/New User');    
    }
    return findUser;  // Return the insertion result
  } catch (err) {
    console.error('Error user login:', err.message);
    throw err;  // Throw error so it can be caught in the calling function
  }
}

  // Return all users
  async function all() {
    try { 
      const users = database.collection('users');
      const docs  = await users.find().toArray();  // Fetch all users
      //console.log('All users:', docs);
      return docs;  // Return the user documents
    } catch (err) {
      console.error('Error fetching users:', err.message);
      throw err;
    }
  }

   // Return balance
   async function findById(userId) {
    try {   
      const users = database.collection('users');
      const userObjectId = new ObjectId(userId);
      const findId = await users.findOne({_id: userObjectId})
      console.log(findId);
      console.log('user Id:', userObjectId);
      return findId; // Return the user details of specific id
    } catch (err) {
      console.error('Error fetching users:', err.message);
      throw err;
    }
  }

  // Return deposit
  async function deposit(userId,deposit) {
    try { 
      const users = database.collection('users');

       // Convert userId to ObjectId if needed
       const userObjectId = new ObjectId(userId);

       console.log(userId)
       //console.log(userObjectId)

      const user = await users.findOne({  _id:  userObjectId });
      console.log(user)

      if (!user) {
        throw new Error('User not found');
    }
      const result = await users.findOneAndUpdate(
            { _id:  userObjectId },
            { $inc: { balance: deposit } } , // Increment the balance  
            { returnDocument: 'after' } // Return the updated document                    
          );
          console.log(result)  
    //return the updated balance
    updatedBalance = user.balance + deposit;
    if (!result.balance) {
      throw new Error('Failed to update balance');
  }
    console.log(updatedBalance)
    return updatedBalance;

    } catch (err) {
      console.error('Error fetching users:', err.message);
      throw err;
    }
  }

  // Return withdraw
  async function withdraw(userId, withdraw) {
    try {
      const users = database.collection('users');
      // Convert userId to ObjectId if needed
       const userObjectId = new ObjectId(userId);
       // Find the user by id
       const user = await users.findOne({ _id: userObjectId });
      // Check if the withdrawal amount is valid
      if (withdraw <= 0) {
        throw new Error('Invalid withdrawal amount');
      }     
      const result = users.findOneAndUpdate(
        { _id: userObjectId },
        { $inc: {balance: -withdraw}}       
      );

      //return the updated balance
      updatedBalance = user.balance - withdraw;
      return updatedBalance;
      
    } catch (err) {
      console.error('Error fetching users:', err.message);
      throw err;
  } 
  }

run().catch(console.dir); 

module.exports = {run, create, login, all, findById, deposit, withdraw};
//export default  run;