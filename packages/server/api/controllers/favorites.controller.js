const knex = require('../../config/db');

// get  favorite movies by userId
const getFavoriteMovie = async (userId) => {
  if (!userId.match(/^\d+$/)) {
    return Promise.reject(new Error('Invalid user ID format'));
  }

  const user = await knex('users').where('id', userId).first();
  if (!user) {
    throw new Error('User not found');
  }

  return knex('movies')
    .select('*')
    .join('favorites', 'favorites.movie_id', '=', 'movies.id')
    .where({ user_id: userId });
};

// add favorite movie
let createdFavoriteID = 0;
const addFavoriteMovie = async (body) => {
  await knex('favorites').insert({
    movie_id: body.movie_id,
    user_id: body.user_id,
    comment: body.comment,
  });

  createdFavoriteID += 1;

  return {
    id: createdFavoriteID,
  };
};

// remove favorite movie by movieID and userId
const removeFavoriteMovie = async (movieID, userId) => {
  return knex('favorites').where({ movie_id: movieID, user_id: userId }).del();
};

module.exports = {
  getFavoriteMovie,
  addFavoriteMovie,
  removeFavoriteMovie,
};
