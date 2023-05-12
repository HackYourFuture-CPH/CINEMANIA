const knex = require('../../config/db');

// get  favorite movies by userID
const getFavoriteMovie = async (userID) => {
  return knex('movies')
    .select('*')
    .join('favorites', 'favorites.user_id', '=', 'movies.id')
    .where({ user_id: userID });
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

// remove favorite movie by movieID and userID
const removeFavoriteMovie = async (movieID, userID) => {
  return knex('favorites').where({ movie_id: movieID, user_id: userID }).del();
};

module.exports = {
  getFavoriteMovie,
  addFavoriteMovie,
  removeFavoriteMovie,
};
