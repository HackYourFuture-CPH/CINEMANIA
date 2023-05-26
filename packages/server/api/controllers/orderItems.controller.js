const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// add movie to the cart
const addMovieToCart = async (orderID, movieID) => {
  await knex('order_items').insert({
    order_id: orderID,
    movie_id: movieID,
  });

  return {
    order_id: orderID,
    movie_id: movieID,
    success: true,
    message: `Movie added to cart with order id ${orderID} successfully.`,
  };
};

const removeMovieFromCart = (userID, movieID, orderID) => {
  return knex('order_items')
    .join('orders', 'orders.id', '=', 'order_items.order_id')
    .join('movies', 'movies.id', '=', 'order_items.movie_id')
    .where({ user_id: userID, movie_id: movieID, order_id: orderID })
    .del();
};

const getOrderItemsByUserId = async (userID) => {
  if (!userID.match(/^\d+$/)) {
    return Promise.reject(new Error('Invalid user ID format'));
  }

  const user = await knex('users').where('id', userID).first();
  if (!user) {
    throw new HttpError('User not found', 404);
  }

  return knex('order_items')
    .select(
      'order_items.order_id',
      'orders.user_id',
      'users.uid',
      'movies.title',
      'movies.price',
      'movies.description',
      'movies.image_location',
    )
    .join('orders', 'orders.id', '=', 'order_items.order_id')
    .join('users', 'users.id', '=', 'orders.user_id')
    .join('movies', 'movies.id', '=', 'order_items.movie_id')
    .where('orders.user_id', userID);
};

module.exports = {
  addMovieToCart,
  removeMovieFromCart,
  getOrderItemsByUserId,
};
