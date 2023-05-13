const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const favoritesController = require('../controllers/favorites.controller');

// get favorite movies by userID
router.get('/:id', (req, res) => {
  const userID = req.params.id;
  const pattern = /^\d+$/;

  if (!userID.match(pattern)) {
    return res.status('400').send('This user id does not exist.');
  }

  favoritesController
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
router.post('/', (req, res) => {
  favoritesController
    .addFavoriteMovie(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).send('Bad request').end();
      res.status(500).json({ error: error.message });
    });
});

// remove favorite movie
router.delete('/:movieID/:userID', (req, res) => {
  favoritesController
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
