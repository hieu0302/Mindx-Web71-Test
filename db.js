import { MongoClient } from "mongodb";
const db = {};

const connectToDb = async () => {
  try {
    const client = new MongoClient("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6");

    await client.connect();

    console.log('Connect DB Successfully')

    const database = client.db("Mindx-web71-db");

    db.inventories = database.collection("inventory");
    db.orders = database.collection("order");
    db.users = database.collection("users");

  } catch (error) {
    console.error('Connect to DB failed:', error);
  }
};

export { connectToDb, db };
