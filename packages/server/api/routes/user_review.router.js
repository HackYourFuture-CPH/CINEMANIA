const express = require('express');

const router = express.Router({ mergeParams: true });
// controllers
const userReviewController = require('../controllers/userReview.controller');

router.get('/:movieID/:userID', (req, res) => {
  userReviewController
    .getReviewsByMovieIdUserId(req.params.movieID, req.params.userID)
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send("User doesn't have reviews for this movie");
      } else {
        res.json(result);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      throw error;
    });
});
module.exports = router;
