const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// get movies that added in act by userID
const getOrderIDCreatedStatus = async (userID) => {
  if (!userID.match(/^\d+$/)) {
    return Promise.reject(new Error('Invalid user ID format'));
  }

  const user = await knex('users').where('id', userID).first();
  if (!user) {
    throw new HttpError('User not found', 404);
  }

  return knex('orders')
    .select('*')
    .where({ user_id: userID, status: 'created' });
};

// issue new order id in case, there is no order_id with status created
const addMovieToCartWithNewOrderID = async (body) => {
  const [orderID] = await knex('orders').insert({
    user_id: body.user_id,
    status: body.status,
  });

  await knex('order_items').insert({
    order_id: orderID,
    movie_id: body.movie_id,
  });

  return {
    orderID,
    success: true,
    message: `Movie added to cart successfully with order id ${orderID} .`,
  };
};

module.exports = {
  getOrderIDCreatedStatus,
  addMovieToCartWithNewOrderID,
};
