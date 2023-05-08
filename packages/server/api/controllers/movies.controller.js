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

const getFeaturedMovie = async (req, res) => {
  // this will be replaced with a real database call in the future for last movie
  /*
  try {
    const featuredMovie = {
      category_id: 8,
      title: 'Dune',
      description:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      image_location:
        'https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg',
      movie_year: 2021,
      price: 299,
    };
    res.json(featuredMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  */
  try {
    const lastMovie = await knex('movies')
      .orderBy('movie_year', 'desc')
      .first();
    if (!lastMovie) {
      throw new Error('No movies found in the database');
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
  getFeaturedMovie,
};
