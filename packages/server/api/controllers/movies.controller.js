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

  // try {
  // if (!movie) {
  //   throw new Error(`incorrect entry with the movie ID ${id}`, 404);
  // }
  return knex('movies').select('*').where({ id }).first();
  // } catch (error) {
  //   return error.message;
  // }
};

const getCrewOfMovieByID = async (id) => {
  if (!id) {
    throw new HttpError('ID should be a number', 400);
  }
  try {
    const crew = await knex
      .select(
        'crew_members.id',
        'full_name',
        'birth_date',
        'image_location',
        'role',
      )
      .from('movie_crew')
      .join('crew_members', 'movie_crew.crew_member_id', '=', 'crew_members.id')
      .where('movie_id', id);
    if (!crew || crew.length === 0) {
      throw new Error(`No crew found for this movie`, 404);
    }
    return crew;
  } catch (error) {
    throw new HttpError(error.message, 500);
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

const getMovieList = (sortBy = 'rating', categoryId = null) => {
  return knex('movies')
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
      knex.raw('AVG(reviews.rating) as average_rating'),
    )
    .groupBy('movies.id')
    .orderByRaw(
      `
      CASE
        WHEN ? = 'rating' THEN AVG(reviews.rating)
        WHEN ? = 'recently_added' THEN movies.created_at
        WHEN ? = 'price' THEN movies.price ASC
      END 
    `,
      [sortBy, sortBy, sortBy],
    )
    .modify((queryBuilder) => {
      if (categoryId) {
        queryBuilder.where('categories.id', '=', categoryId);
      }
    });
};

module.exports = {
  getMovies,
  getMovieByID,
  editMovie,
  deleteMovie,
  createMovie,
  getCrewOfMovieByID,
  getMovieList,
};
