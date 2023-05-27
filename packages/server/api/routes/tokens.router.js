const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const tokensController = require('../controllers/tokens.controller');

router.get('/:id', (req, res) => {
  const userId = req.params.id;

  tokensController
    .getAccountBalance(userId)
    .then((result) => {
      if (result.length === 0) {
        res.status(200).send('No balance remaining.');
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
