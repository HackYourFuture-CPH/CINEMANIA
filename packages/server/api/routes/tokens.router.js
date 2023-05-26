const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const tokensController = require('../controllers/tokens.controller');

router.get('/:id', (req, res) => {
  const userID = req.params.id;

  tokensController
    .getOriginalAmount(userID)
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

module.exports = router;
