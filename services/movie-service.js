import { mongo } from "../db/mongo.js";
import { movieSchema } from "../validations/movie-validation.js";
import { ObjectId } from "mongodb";

class MovieService {
  async CreateMovie(data, res) {
    try {
      const { value, error } = movieSchema.validate(data);
      if (error) res.status(500).send({ Error: error.details[0].message });
      const newMovie = await mongo.movies.insertOne({
        ...value,
        created_date: new Date(),
      });
      return newMovie;
    } catch (err) {
      console.log("Error in creating movie" + err);
      res.status(500).send({ message: "Error in Create Movie Service" });
    }
  }
  async UpdateMovie(data, id, res) {
    try {
      const { value, error } = movieSchema.validate(data);
      if (error) res.status(500).send({ Error: error.details[0].message });
      const result = await mongo.movies.findOneAndUpdate(
        { _id: ObjectId(id) },
        {
          $set: value,
        },
        { returnNewDocument: true }
      );
      const response = await mongo.movies.findOne({ _id: ObjectId(id) });
      return response;
    } catch (err) {
      console.log("Error in updating movie" + err);
      res.status(500).send({ message: "Error in Update Movie Service" });
    }
  }
  async FetchMovies(res) {
    try {
      const response = await mongo.movies.find().toArray();
      return response;
    } catch (err) {
      console.log("Error in fetching movies" + err);
      res.status(500).send({ message: "Error in Fetch Movies Service" });
    }
  }
  async FetchMovieById(id, res) {
    try {
      const response = await mongo.movies.findOne({ _id: ObjectId(id) });
      return response;
    } catch (err) {
      console.log("Error in fetching movie by id" + err);
      res.status(500).send({ message: "Error in Fetch MovieById Service" });
    }
  }
  async DeleteMovie(id, res) {
    try {
      const response = await mongo.movies.deleteOne({ _id: ObjectId(id) });
      return response;
    } catch (err) {
      console.log("Error in deleting movie" + err);
      res.status(500).send({ message: "Error in Delete Movie Service" });
    }
  }
}

export default new MovieService();
