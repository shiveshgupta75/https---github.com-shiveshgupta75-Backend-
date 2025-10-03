const { MongoClient } = require("mongodb");

const url = "mongodb+srv://shivesh_gupta_75:1234567pP@cluster0.emfjgzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);
const dbName = "HelloWorld";

 async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');
  const data={
    "firstname":"Shahrukh",
    "lastname":"Khan",
   "city":"Mumbai",
    "phone_number":"9307xxxxxx"
  };
//   const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);
//   //READ
//   const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);
// const countResult= await collection.countDocuments({});
// console.log("Total documents are : "+countResult);

//Finding all douments with firstname Shahrukh
 const result= await collection.find({firstname:"Shahrukh"}).toArray();
 console.log("RESULT =>",result);
 const countt = await collection.countDocuments({ firstname: "Shahrukh" });
console.log("count =>", countt);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());