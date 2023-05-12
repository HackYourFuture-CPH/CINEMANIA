const express = require('express');

const router = express.Router();
const crewController = require('../controllers/crew.controller');

router.get('/movie/:id', (req, res) => {
  crewController
    .getCrewOfMovieByID(req.params.id)
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send('No crew found for this movie');
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
