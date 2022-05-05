import joi from "joi";

const movieSchema = joi.object({
  movie_name: joi.string().required("Movie name is required"),
  rating: joi.number().required("Rating is required"),
  cast: joi.array().min(1,"Atleast one cast member must be entered").required("Cast is required"),
  genre: joi.string().required("Genre is required"),
  release_date: joi.date().required("Date is required"),
});

export { movieSchema };
