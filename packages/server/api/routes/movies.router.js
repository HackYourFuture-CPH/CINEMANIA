/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const moviesController = require('../controllers/movies.controller');
// get /
router.get('/', (req, res, next) => {
  return moviesController
    .getMovies(req.query)
    .then((result) => res.json(result))
    .catch(next);
});

// GET /featured-movie
router.get('/featured', moviesController.getFeaturedMovie);

// get /:id
router.get('/:id', (req, res, next) => {
  moviesController
    .getMovieByID(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/:id/details', (req, res) => {
  moviesController
    .getDetailsOfMovieByID(req.params.id)
    .then((result) => {
      if (!result || result.length === 0) {
        res.status(404).send('No movie details found for this id');
      } else {
        res.json(result);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      throw error;
    });
});
// add endpoint to retrieve movies by category
router.get('/category/:categoryId', (req, res, next) => {
  const { categoryId } = req.params;
  moviesController
    .getMoviesByCategory(categoryId)
    .then((result) => res.json(result))
    .catch(next);
});

// post
router.post('/', (req, res) => {
  moviesController
    .createMovie(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

// patch /:id
router.patch('/:id', (req, res, next) => {
  moviesController
    .editMovie(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// delete /:id
router.delete('/:id', (req, res) => {
  moviesController
    .deleteMovie(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the movie id does not exist
      if (result === 0) {
        res.status(404).send('The movie ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
});

module.exports = router;
