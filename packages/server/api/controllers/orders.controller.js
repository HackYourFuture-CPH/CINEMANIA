const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// get movies that added in act by userId
const getOrderIdCreatedStatus = async (userId) => {
  if (!userId.match(/^\d+$/)) {
    return Promise.reject(new Error('Invalid user ID format'));
  }

  const user = await knex('users').where('id', userId).first();
  if (!user) {
    throw new HttpError('User not found', 404);
  }

  return knex('orders')
    .select('*')
    .where({ user_id: userId, status: 'created' });
};

// issue new order id in case, there is no order_id with status created
const addMovieToCartWithNewOrderId = async (body) => {
  const [orderId] = await knex('orders').insert({
    user_id: body.user_id,
    status: body.status,
  });

  await knex('order_items').insert({
    order_id: orderId,
    movie_id: body.movie_id,
  });

  return {
    orderId,
    success: true,
    message: `Movie added to cart successfully with order id ${orderId}.`,
  };
};

module.exports = {
  getOrderIdCreatedStatus,
  addMovieToCartWithNewOrderId,
};
