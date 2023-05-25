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
router.get('/:uid', (req, res) => {
  const { uid } = req.params;
  usersController
    .getUserIdByUid(uid)
    .then((result) => res.json(result))
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});
module.exports = router;
