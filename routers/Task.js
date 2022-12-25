const express = require("express");
const router = express.Router();
const {
  longestDurationMovies,
  newMovie,
  topRatedMovies,
  newRating,
} = require("../controller/Task");

router.get("/longest-duration-movies", longestDurationMovies);
router.post("/new-movie", newMovie);
router.get("/top-rated-movies", topRatedMovies);
router.post("/new-rating", newRating);

module.exports = router;
