import RegisterService from "../services/register-service.js"

class RegisterController {
 async CreateUser(req, res) {
  try {
   const data = req.body;
   const response = await RegisterService.CreateUser(data,res);
   res.status(201).send({ message: "Registration done Successfully", response });
  }
  catch (err) {
  console.log("Error in Create User Controller"+err)
  }
 }
 async UpdateUser(req, res) {
  try {
   const data = req.body;
   const {id
  } = req.params;
   const response = await RegisterService.UpdateUser(data,id,res);
   res.status(200).send({ message: "Updated user Successfully", response });
  }
  catch (err) {
  console.log("Error in Update User Controller"+err)
  }

 }
 async FetchUsers(req, res) {
  try {
   const response = await RegisterService.FetchUsers(res);
   res.status(200).send(response);
  }
catch (err) {
  console.log("Error in Fetch Users Controller"+err)
  }
 }
 async FetchUserById(req, res) {
  try {
   const { id } = req.params;
   const response = await RegisterService.FetchUserById(id,res);
   response ? res.send(response) : res.status(404).send({ Error: "Not Found" });
  }
catch (err) {
  console.log("Error in Fetch UserById Controller"+err)
  }

 }
 async DeleteUser(req, res) {
 try {
   const { id } = req.params;
   const result = await RegisterService.DeleteUser(id,res);
 result.deletedCount > 0 ? res.send(result) : res.send({ message: "No user Found" });
  }
catch (err) {
  console.log("Error in Delete User Controller"+err)
  }

 }
}

export default new RegisterController();
