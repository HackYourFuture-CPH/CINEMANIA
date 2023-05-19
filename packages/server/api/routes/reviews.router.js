const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const reviewsController = require('../controllers/reviews.controller');

router.get('/movie/:id', (req, res) => {
  const { id } = req.params;
  reviewsController
    .getReviewsOfMovieByID(id)
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get('/rating/latest', (req, res) => {
  reviewsController
    .getLatestRatedMovies()
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(500).json({ error: error.message });
      throw error;
    });
});

module.exports = router;
