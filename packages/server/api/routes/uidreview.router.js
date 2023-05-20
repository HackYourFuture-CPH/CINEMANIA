const express = require('express');

const router = express.Router({ mergeParams: true });
// controllers
const uidreviewController = require('../controllers/uidreview.controller');

router.get('/:id/:uid', (req, res) => {
  uidreviewController
    .getReviewByUid(req.params.id, req.params.uid)
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
