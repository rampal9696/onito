const mongoose = require("mongoose");

// Rating Schema

const RatingSchema = new mongoose.Schema({
  averageRatings: {
    type: Number,
    default: 0,
  },
  numberVotes: {
    type: Number,
    default: 0,
  },
});

// New Movies Schema

const MoviesSchema = new mongoose.Schema({
  titleTypes: {
    type: String,
    require: true,
  },
  primaryTitle: {
    type: String,
    require: true,
  },
  runTimeMinutes: {
    type: Number,
    require: true,
  },
  genres: {
    type: String,
    require: true,
  },
});

const Rating = mongoose.model("Rating", RatingSchema);
const Movie = mongoose.model("Movie", MoviesSchema);

module.exports = { Rating, Movie };
