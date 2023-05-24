const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');

router.get('/:id', (req, res) => {
  const userID = req.params.id;
  const pattern = /^\d+$/;

  if (!userID.match(pattern)) {
    return res.status('400').send('This user id does not exist.');
  }

  ordersController
    .getOrderIDCreatedStatus(userID)
    .then((result) => {
      if (result.length === 0) {
        res
          .status(200)
          .send("This user doesn't have order with created status pending");
      } else {
        res.json(result);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
      throw error;
    });
});

router.post('/', (req, res) => {
  ordersController
    .addMovieToCartWithNewOrderID(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).send('Bad request').end();
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
