const knex = require('../../config/db');

// add movie to the cart
let createdID = 0;
const addMovieToCart = async (body) => {
  await knex('order_items').insert({
    order_id: body.order_id,
    movie_id: body.movie_id,
  });

  createdID += 1;
  return {
    id: createdID,
    success: true,
    message: `Movie added to cart with order id ${body.order_id} successfully.`,
  };
};

const removeMovieFromCart = (userID, movieID, orderID) => {
  return knex('order_items')
    .join('orders', 'orders.id', '=', 'order_items.order_id')
    .join('movies', 'movies.id', '=', 'order_items.movie_id')
    .where({ user_id: userID, movie_id: movieID, order_id: orderID })
    .del();
};

const getOrderItemsByUserId = (userID) => {
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
