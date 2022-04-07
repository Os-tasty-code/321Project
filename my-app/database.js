/*PLEASE NOT THAT YOU WILL NOT BE ABLE TO CONNECT TO THE DATABASE
  UNLESS YOU ARE USING THE GMU VPN*/

const { MongoClient } = require('mongodb');
//needs to be changed with Zach's database information / user information
const uri = "mongodb+srv://oddcosmo:RTFR2kNSxewwtpb@cluster0.v3ihi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    //db --> access database
  const db = client.db("family");
  //collection --> access collection within database (usually information about actions on database)
  var cursor = db.collection('house_example').find({});
  console.log(cursor);

  client.close();
});
