const { Rating, Movie } = require("../module/Test");

// Get Top 10  longest Duration Movies
const longestDurationMovies = async (req, res) => {
  try {
    const Movies = await Movie.find({}).sort({ runTimeMinutes: -1 }).limit(10);
    res.status(200).json(Movies);
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

// inset the new movie in database

const newMovie = async (req, res) => {
  try {
    const MovieData = await Movie.create(req.body);
    MovieData.save();

    res
      .status(200)
      .send({ message: "new movies insert successfully", MovieData });
  } catch (error) {
    res.status(404).send(error);
  }
};

// insert the new rating in database

const newRating = async (req, res) => {
  try {
    const RatingData = await Rating.create(req.body);
    RatingData.save();

    res
      .status(200)
      .send({ message: "new Rating Data insert successfully", RatingData });
  } catch (error) {
    res.status(404).send(error);
  }
};

//Get Top 10 Rating movies

const topRatedMovies = async (req, res) => {
  try {
    const Ratings = await Rating.find({
      $and: [{ $or: [{ averageRatings: { $gt: 6 } }] }],
    })
      .sort({ averageRatings: -1 })
      .limit(10);
    res.status(200).json(Ratings);
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

module.exports = { longestDurationMovies, newMovie, topRatedMovies, newRating };
