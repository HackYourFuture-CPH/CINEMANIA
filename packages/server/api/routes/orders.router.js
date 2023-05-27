const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');

router.get('/:id', (req, res) => {
  const userId = req.params.id;

  ordersController
    .getOrderIdCreatedStatus(userId)
    .then((result) => {
      if (result.length === 0) {
        res
          .status(200)
          .send("This user doesn't have orders with a 'created' status.");
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
    .addMovieToCartWithNewOrderId(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res
        .status(400)
        .json({ message: 'Bad request', error: error.message })
        .end();
    });
});

module.exports = router;
