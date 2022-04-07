/*PLEASE NOT THAT YOU WILL NOT BE ABLE TO CONNECT TO THE DATABASE
  UNLESS YOU ARE USING THE GMU VPN*/

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://O:PRLJYAb3wnN6QBlL@cluster0.wdjd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    //db --> access database
  const db = client.db("ChoreApp");
  //collection --> access collection within database (usually information about actions on database)
  var cursor = db.collection('goals').find({});
  console.log(cursor);

  client.close();
});
