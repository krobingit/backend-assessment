import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGODB_URL);

let mongo = {
  db: null,
  users: null,
  async connectDB() {
    await mongoClient.connect();
    console.log("MongoDB Connected");
    this.db = mongoClient.db("Backend_Assessment");
    this.users = this.db.collection("users");
    this.movies=this.db.collection("movies");
  },
};

export { mongo };
