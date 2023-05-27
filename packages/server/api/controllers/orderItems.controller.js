const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// add movie to the cart
const addMovieToCart = async (orderId, movieId) => {
  await knex('order_items').insert({
    order_id: orderId,
    movie_id: movieId,
  });

  return {
    order_id: orderId,
    movie_id: movieId,
    success: true,
    message: `Movie added to cart with order id ${orderId} successfully.`,
  };
};

const removeMovieFromCart = (userId, movieId, orderId) => {
  return knex('order_items')
    .join('orders', 'orders.id', '=', 'order_items.order_id')
    .join('movies', 'movies.id', '=', 'order_items.movie_id')
    .where({ user_id: userId, movie_id: movieId, order_id: orderId })
    .del();
};

const getOrderItemsByuserId = async (userId) => {
  if (!userId.match(/^\d+$/)) {
    return Promise.reject(new Error('Invalid user ID format'));
  }

  const user = await knex('users').where('id', userId).first();
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
    .where('orders.user_id', userId);
};

module.exports = {
  addMovieToCart,
  removeMovieFromCart,
  getOrderItemsByuserId,
};
