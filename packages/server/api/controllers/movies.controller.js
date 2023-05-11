/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getMovieByID = async (id) => {
  if (!id) {
    throw new HttpError('ID should be a number', 400);
  }

  // try {
  // if (!movie) {
  //   throw new Error(`incorrect entry with the movie ID ${id}`, 404);
  // }
  return knex('movies').select('*').where({ id }).first();
  // } catch (error) {
  //   return error.message;
  // }
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

const getMovies = async (queryParams) => {
  const { sortBy = 'rating', categoryId = null, userId = null } = queryParams;

  let query = knex('movies')
    .leftJoin('reviews', 'reviews.movie_id', '=', 'movies.id')
    .leftJoin('categories', 'categories.id', '=', 'movies.category_id')
    .select(
      'movies.id',
      'movies.title',
      'movies.description',
      'movies.movie_year',
      'movies.image_location',
      'movies.created_at',
      'movies.price',
      'movies.category_id',
      knex.raw('AVG(reviews.rating) as average_rating'),
      knex.raw(
        `
        IF(EXISTS(
          SELECT 1 FROM favorites
          WHERE favorites.movie_id = movies.id
          AND favorites.user_id = ?
        ), 1, 0) as is_favorite
      `,
        [userId],
      ),
    )
    .groupBy('movies.id')
    .modify((queryBuilder) => {
      if (categoryId) {
        queryBuilder.where('categories.id', '=', categoryId);
      }
    });

  if (sortBy === 'rating') {
    query = query.orderByRaw('AVG(reviews.rating) desc');
  }

  if (sortBy === 'recently_added') {
    query = query.orderBy('movies.created_at', 'desc');
  }

  if (sortBy === 'price') {
    query = query.orderBy('movies.price', 'asc');
  }

  const results = await query;

  return results.map((result) => ({
    ...result,
    is_favorite: result.is_favorite === 1,
  }));
};

module.exports = {
  getMovies,
  getMovieByID,
  editMovie,
  deleteMovie,
  createMovie,
};
