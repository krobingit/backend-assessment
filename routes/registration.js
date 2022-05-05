import express from "express";
import RegisterController from "../controllers/register-controller.js";

const router = express.Router();

 router
 .route("/")
 .post(RegisterController.CreateUser)

router
 .route("/users")
 .get(RegisterController.FetchUsers)

router
 .route('/users/:id')
 .get(RegisterController.FetchUserById)
 .put(RegisterController.UpdateUser)
 .delete(RegisterController.DeleteUser)

export const registerRoute = router;