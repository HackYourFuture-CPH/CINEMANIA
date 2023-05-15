const knex = require('../../config/db');

const getLatestRatedMovies = async () => {
  return knex('reviews')
    .select(
      'movies.image_location',
      'movies.title',
      'reviews.rating',
      'reviews.review_text',
      'reviews.created_at',
    )
    .join('movies', 'movies.id', '=', 'reviews.movie_id')
    .orderBy('reviews.created_at', 'desc')
    .limit(8);
};

module.exports = {
  getLatestRatedMovies,
};
