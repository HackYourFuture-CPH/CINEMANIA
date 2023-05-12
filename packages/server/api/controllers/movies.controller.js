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

  return knex('movies').select('*').where({ id }).first();
};

const getMoviesByCategory = async (categoryId) => {
  try {
    const movies = await knex
      .select(
        'm.id',
        'm.title',
        'm.description',
        'm.movie_year',
        'm.image_location',
        'm.price',
        'm.created_at',
      )
      .from('movies as m')
      .where('m.category_id', categoryId)
      .limit(9);
    if (movies.length === 0) {
      return { message: `No movies found under this category` };
    }
    return movies;
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

const getFeaturedMovie = async (req, res) => {
  try {
    const lastMovie = await knex('movies')
      .orderBy('movie_year', 'desc')
      .first();
    if (!lastMovie) {
      throw new HttpError('No movies found in the database');
    }
    const featuredMovie = {
      category_id: lastMovie.category_id,
      title: lastMovie.title,
      description: lastMovie.description,
      image_location: lastMovie.image_location,
      movie_year: lastMovie.movie_year,
      price: lastMovie.price,
    };
    res.json(featuredMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMovies,
  getMovieByID,
  editMovie,
  deleteMovie,
  createMovie,
  getMoviesByCategory,
  getMovieList,
  getFeaturedMovie,
};
