const knex = require('../../config/db');

// get movies that added in act by userID
const getOrderIDCreatedStatus = (userID) => {
  return knex('orders')
    .select('*')
    .where({ user_id: userID, status: 'created' });
};

// issue new order id in case, there is no order_id with status created
let createdID = 0;
const addMovieToCartWithNewOrderID = async (body) => {
  const orderID = await knex('orders').insert({
    user_id: body.user_id,
    status: body.status,
  });

  await knex('order_items').insert({
    order_id: orderID,
    movie_id: body.movie_id,
  });

  createdID += 1;
  return {
    id: createdID,
    success: true,
    message: `Movie added to cart successfully with order id ${orderID} .`,
  };
};

module.exports = {
  getOrderIDCreatedStatus,
  addMovieToCartWithNewOrderID,
};
