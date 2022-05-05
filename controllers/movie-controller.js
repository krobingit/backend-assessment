import MovieService from "../services/movie-service.js";

class MovieController {
  async CreateMovie(req, res) {
    try {
      const data = req.body;
      const response = await MovieService.CreateMovie(data, res);
      res
        .status(201)
        .send({ message: "Movie created Successfully", response });
    } catch (err) {
      console.log("Error in Create Movie Controller" + err);
    }
  }
  async UpdateMovie(req, res) {
    try {
      const data = req.body;
      const { id } = req.params;
      const response = await MovieService.UpdateMovie(data, id, res);
      res.status(200).send({ message: "Updated Movie Successfully", response });
    } catch (err) {
      console.log("Error in Update Movie Controller" + err);
    }
  }
  async FetchMovies(req, res) {
    try {
      const response = await MovieService.FetchMovies(res);
      res.status(200).send(response);
    } catch (err) {
      console.log("Error in Fetch Movies Controller" + err);
    }
  }
  async FetchMovieById(req, res) {
    try {
      const { id } = req.params;
      const response = await MovieService.FetchMovieById(id, res);
      response
        ? res.status(200).send(response)
        : res.status(404).send({ Error: "Not Found" });
    } catch (err) {
      console.log("Error in Fetch MovieById Controller" + err);
    }
  }
  async DeleteMovie(req, res) {
    try {
      const { id } = req.params;
      const result = await MovieService.DeleteMovie(id, res);
      result.deletedCount > 0
        ? res.status(200).send({message:"Movie Deleted Successfully"})
        : res.status(404).send({ message: "No Movie Found" });
    } catch (err) {
      console.log("Error in Delete Movie Controller" + err);
    }
  }
}

export default new MovieController();
