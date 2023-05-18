const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const viewController = require('../controllers/views.controller');

router.get('/most-popular', (req, res, next) => {
  viewController
    .getMostPopularMovies()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
