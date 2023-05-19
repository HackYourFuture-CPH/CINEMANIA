const knex = require('../../config/db');

const getLatestRatedMovies = async () => {
  const movies = await knex('reviews')
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
  return movies;
};

module.exports = {
  getLatestRatedMovies,
};
