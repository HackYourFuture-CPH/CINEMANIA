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

const getDetailsOfMovieByID = async (id) => {
  if (!id) {
    throw new HttpError('ID should be a number', 400);
  }

  try {
    const movie = await knex
      .select(
        'm.id',
        'm.title',
        'm.description',
        'm.movie_year',
        'm.image_location',
        knex.raw('ROUND(AVG(r.rating),1) as rating'),
        knex.raw('COUNT(DISTINCT r.user_id) as number_of_ratings'),
        'c.name as category_name',
        knex.raw(
          'GROUP_CONCAT(CASE WHEN mc.role = "Director" THEN cm.full_name END) as director',
        ),
        knex.raw(
          'GROUP_CONCAT(CASE WHEN mc.role = "Writer" THEN cm.full_name END) as writer',
        ),
      )
      .from('movies as m')
      .leftJoin('reviews as r', 'm.id', 'r.movie_id')
      .leftJoin('categories as c', 'm.category_id', 'c.id')
      .leftJoin('movie_crew as mc', 'm.id', 'mc.movie_id')
      .leftJoin('crew_members as cm', 'mc.crew_member_id', 'cm.id')
      .where('m.id', id)
      .groupBy('m.id');
    return movie[0];
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
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
  getDetailsOfMovieByID,
  getMovieList,
};
