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

// get favorite movies by userID
router.get('/favorites/:id', (req, res) => {
  const userID = req.params.id;
  const pattern = /^\d+$/;

  if (!userID.match(pattern)) {
    return res.status('400').send('This user id does not exist.');
  }

  moviesController
    .getFavoriteMovie(userID)
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send('This user id does\t have any favorite movies');
      } else {
        res.json(result);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      throw error;
    });
});

// add favorite movie
router.post('/favorites', (req, res) => {
  moviesController
    .addFavoriteMovie(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(400).send('Bad request').end();
      res.status(500).json({ error: error.message });
    });
});

// remove favorite movie
router.delete('/favorites/:movieID/:userID', (req, res) => {
  moviesController
    .removeFavoriteMovie(req.params.movieID, req.params.userID)
    .then((result) => {
      // If result is equal to 0, then that means the movie id does not exist
      if (result === 0) {
        res.status(404).send('The movie ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => {
      res.status(400).send('Bad request').end();
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
