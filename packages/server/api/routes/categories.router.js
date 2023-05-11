/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const categoriesController = require('../controllers/categories.controller');
// get /
router.get('/', (req, res, next) => {
  categoriesController
    .getCategories()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
