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

module.exports = router;
