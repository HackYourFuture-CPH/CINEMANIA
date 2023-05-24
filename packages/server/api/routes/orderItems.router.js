const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const orderItemsController = require('../controllers/orderItems.controller');

router.post('/', (req, res) => {
  orderItemsController
    .addMovieToCart(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).send('Bad request').end();
      res.status(500).json({ error: error.message });
    });
});

router.delete('/:userID/:movieID/:orderID', (req, res) => {
  orderItemsController
    .removeMovieFromCart(
      req.params.userID,
      req.params.movieID,
      req.params.orderID,
    )
    .then((result) => {
      if (result === 0) {
        res.status(404).send("Can't find the item that you request to remove.");
      } else {
        res.status(200).json({
          success: true,
          message: 'Removed movie from cart sucessfully',
        });
      }
    })
    .catch((error) => {
      res.status(400).send('Bad request').end();
      res.status(500).json({ error: error.message });
    });
});

router.get('/:id', (req, res) => {
  const userID = req.params.id;
  const pattern = /^\d+$/;

  if (!userID.match(pattern)) {
    return res.status('400').send('This user id does not exist.');
  }

  orderItemsController
    .getOrderItemsByUserId(userID)
    .then((result) => {
      if (result.length === 0) {
        res
          .status(200)
          .send("This user doesn't have any movies add into the cart");
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
