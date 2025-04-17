const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGO_URI;
const dbName = "express_mysql";

// connect to database
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("Connected to mongoDB");
    return db.collection("products");
  } catch (error) {
    console.log("Error: ", error);
  }
}

module.exports = { connectDB };
