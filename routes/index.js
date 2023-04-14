const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const movie = require('movies')
=======
const Movies = require("../models/Movie.model");

>>>>>>> 818608fac924fed5f41eb77a9ab11e27508c3512
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movies.find()
    .then((allMoviesFromDB) => {
      const movies = allMoviesFromDB.map((movie) => ({
        id: movie._id,
        title: movie.title,
        image_url: movie.image,
      }));
      res.render("movies", { movies });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB", error);
      next(error);
    });
});

module.exports = router;
