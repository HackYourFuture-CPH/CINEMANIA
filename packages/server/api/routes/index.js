const express = require('express');

const router = express.Router();

const movies = require('./movies.router');
const tokens = require('./tokens.router');
const crew = require('./crew.router');
const views = require('./views.router');
const categories = require('./categories.router');
const reviews = require('./reviews.router');
const favorites = require('./favorites.router');
const users = require('./users.router');
const orders = require('./orders.router');
const orderItems = require('./orderItems.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/users', users);
router.use('/movies', movies);
router.use('/reviews', reviews);
router.use('/views', views);
router.use('/crew', crew);
router.use('/favorites', favorites);
router.use('/tokens', tokens);
router.use('/orders', orders);
router.use('/order-items', orderItems);

module.exports = router;
router.use('/categories', categories);
