import express from "express";
import MovieController from "../controllers/movie-controller.js";

const router = express.Router();

 router
 .route("/")
 .post(MovieController.CreateMovie)

router
 .route("/all")
 .get(MovieController.FetchMovies)

router
 .route('/:id')
 .get(MovieController.FetchMovieById)
 .put(MovieController.UpdateMovie)
 .delete(MovieController.DeleteMovie)

export const movieRoute = router;