import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient("mongodb+srv://robinlio:9790199718@cluster0.nev0r.mongodb.net");

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
