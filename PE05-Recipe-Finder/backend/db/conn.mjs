import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.ATLAS_URI);

let db;

try {
  await client.connect();
  db = client.db("pe05_recipe_finder");
  console.log("Connected to MongoDB Atlas");
} catch (err) {
  console.error("MongoDB connection error:", err);
}

export default db;