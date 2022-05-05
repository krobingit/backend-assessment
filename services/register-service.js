import { mongo } from "../db/mongo.js";
import { registerSchema } from "../validations/register-validation.js";
import { ObjectId } from "mongodb";

class RegisterService {
  async CreateUser(data, res) {
    try {
      const { value, error } = registerSchema.validate(data);
      if (error) res.status(500).send({ Error: error.details[0].message });
      const newUser = await mongo.users.insertOne({
        ...value,
        created_date: new Date(),
      });
      return newUser;
    } catch (err) {
      console.log("Error in registering user" + err);
      res.status(500).send({ message: "Error in Create User Service" });
    }
  }
  async UpdateUser(data, id, res) {
    try {
      const result = await mongo.users.findOneAndUpdate(
        { _id: ObjectId(id) },
        {
          $set: data,
        },
        { returnNewDocument: true }
      );
      const response = await mongo.users.findOne({ _id: ObjectId(id) });
      return response;
    } catch (err) {
      console.log("Error in updating user" + err);
      res.status(500).send({ message: "Error in Update User Service" });
    }
  }
  async FetchUsers(res) {
    try {
      const response = await mongo.users.find().toArray();
      return response;
    } catch (err) {
      console.log("Error in fetching users" + err);
      res.status(500).send({ message: "Error in Fetch Users Service" });
    }
  }
  async FetchUserById(id, res) {
    try {
      const response = await mongo.users.findOne({ _id: ObjectId(id) });
      return response;
    } catch (err) {
      console.log("Error in fetching user by id" + err);
      res.status(500).send({ message: "Error in Fetch UserById Service" });
    }
  }
  async DeleteUser(id, res) {
    try {
      const response = await mongo.users.deleteOne({ _id: ObjectId(id) });
      return response;
    } catch (err) {
      console.log("Error in deleting user" + err);
      res.status(500).send({ message: "Error in Delete User Service" });
    }
  }
}

export default new RegisterService();
