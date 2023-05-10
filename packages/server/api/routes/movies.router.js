/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const moviesController = require('../controllers/movies.controller');
// get /
router.get('/', (req, res, next) => {
  moviesController
    .getMovies()
    .then((result) => res.json(result))
    .catch(next);
});

// get /:id
router.get('/:id', (req, res, next) => {
  moviesController
    .getMovieByID(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/:id/crew', (req, res) => {
  moviesController
    .getCrewOfMovieByID(req.params.id)
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send('No crew found for this movie');
      } else {
        res.json(result);
      }
    })
    .catch((error) => {
      req.status(500).json({ error: error.message });
      throw error;
    });
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
