/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getMovies = async () => {
  return knex('movies').select('*');
};

const getMovieByID = async (id) => {
  if (!id) {
    throw new HttpError('ID should be a number', 400);
  }

  try {
    const movie = await knex('movies').select('*').where({ id }).first();
    if (!movie) {
      throw new Error(`incorrect entry with the movie ID ${id}`, 404);
    }
    return movie;
  } catch (error) {
    return error.message;
  }
};

const editMovie = async (movieID, updateMovie) => {
  if (!movieID) {
    throw new HttpError('movie ID should be a number', 400);
  }

  return knex('movies').where({ id: movieID }).update({
    title: updateMovie.title,
    updatedAt: moment().format(),
  });
};

const deleteMovie = async (movieID) => {
  return knex('movies').where({ id: movieID }).del();
};

const createMovie = async (body) => {
  await knex('movies').insert({
    title: body.title,
  });

  return {
    successful: true,
  };
};

// get  favorite movies by userID
const getFavoriteMovie = async (userID) => {
  return knex('movies')
    .select('*')
    .join('favorites', 'favorites.user_id', '=', 'movies.id')
    .where({ user_id: userID });
};

// add favorite movie
const addFavoriteMovie = async (body) => {
  await knex('favorites').insert({
    movie_id: body.movie_id,
    user_id: body.user_id,
    comment: body.comment,
  });

  return {
    successful: true,
  };
};

// remove favorite movie by movieID and userID
const removeFavoriteMovie = async (movieID, userID) => {
  return knex('favorites').where({ movie_id: movieID, user_id: userID }).del();
};

module.exports = {
  getMovies,
  getMovieByID,
  editMovie,
  deleteMovie,
  createMovie,
  getFavoriteMovie,
  addFavoriteMovie,
  removeFavoriteMovie,
};
