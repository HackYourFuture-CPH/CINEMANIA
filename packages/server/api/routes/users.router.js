const express = require('express');

const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controller');

router.post('/', async (req, res, next) => {
  try {
    const result = await usersController.createUser(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res) => {
  const uid = req.params.id;

  usersController
    .getUserInformation(uid)
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send("couldn't find user with this id");
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
