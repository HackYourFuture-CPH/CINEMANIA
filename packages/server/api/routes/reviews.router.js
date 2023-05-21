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

router.delete('/:id', (req, res) => {
  reviewsController.deleteReview(req.params.id, req).then((result) => {
    // If result is equal to 0, then that means the movie id does not exist
    if (result === 0) {
      res.status(404).send('The review ID you provided does not exist.');
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;
