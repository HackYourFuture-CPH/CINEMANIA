const knex = require('../../config/db');

const getMostPopularMovies = async () => {
  return knex('views')
    .select(
      'movies.title',
      'movies.description',
      'movies.movie_year',
      'movies.image_location',
      'movies.price',
    )
    .count('views.movie_id as view_count')
    .leftJoin('movies', 'movies.id', 'views.movie_id')
    .groupBy('movies.id')
    .orderBy('view_count', 'desc')
    .limit(12);
};

module.exports = {
  getMostPopularMovies,
};
