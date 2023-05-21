const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getLatestRatedMovies = async () => {
  return knex('reviews')
    .select(
      'movies.id',
      'movies.image_location',
      'movies.backdrop_URL',
      'movies.title',
      'reviews.rating',
      'reviews.review_text',
      'reviews.created_at',
    )
    .join('movies', 'movies.id', '=', 'reviews.movie_id')
    .orderBy('reviews.created_at', 'desc')
    .limit(8);
};

const getReviewsOfMovieByID = async (id) => {
  if (isNaN(id)) {
    throw new HttpError('ID should be a number', 400);
  }
  try {
    const reviews = await knex('reviews')
      .select(
        'reviews.id',
        'users.full_name',
        'reviews.rating',
        'reviews.review_text',
        'reviews.created_at',
      )
      .join('users', 'users.id', '=', 'reviews.user_id')
      .where('reviews.movie_id', id)
      .orderBy('reviews.created_at', 'desc');
    return reviews;
  } catch (error) {
    throw new HttpError(error.message, 500);
  }
};

const deleteReview = async (ReviewID) => {
  return knex('reviews').where({ id: ReviewID }).del();
};

module.exports = {
  getLatestRatedMovies,
  getReviewsOfMovieByID,
  deleteReview,
};
