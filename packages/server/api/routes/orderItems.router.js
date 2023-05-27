const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const orderItemsController = require('../controllers/orderItems.controller');

router.put('/orderId/:orderId/movieId/:movieId', (req, res) => {
  orderItemsController
    .addMovieToCart(req.params.orderId, req.params.movieId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res
        .status(400)
        .json({ message: 'Bad request', error: error.message })
        .end();
    });
});

router.delete(
  '/userId/:userId/movieId/:movieId/orderId/:orderId',
  (req, res) => {
    orderItemsController
      .removeMovieFromCart(
        req.params.userId,
        req.params.movieId,
        req.params.orderId,
      )
      .then((result) => {
        if (result === 0) {
          res
            .status(404)
            .send("Can't find the item that you request to remove.");
        } else {
          res.status(200).json({
            success: true,
            message: 'Removed movie from cart sucessfully',
          });
        }
      })
      .catch((error) => {
        res
          .status(400)
          .json({ message: 'Bad request', error: error.message })
          .end();
      });
  },
);

router.get('/:id', (req, res) => {
  const userId = req.params.id;

  orderItemsController
    .getOrderItemsByuserId(userId)
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
