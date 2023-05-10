const express = require('express');

const router = express.Router({ mergeParams: true });

const moviesController = require('../controllers/movies.controller');

// get /list
router.get('/', async (req, res, next) => {
  const { sortBy, categoryId } = req.query;
  return moviesController
    .getMovieList(sortBy, categoryId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
