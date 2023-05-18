const knex = require('../../config/db');

const getMostPopularMovies = async () => {
  return knex('views')
    .select(
      'movies.id',
      'movies.title',
      'movies.description',
      'movies.movie_year',
      'movies.backdrop_URL',
      'movies.price',
      'categories.name as category',
    )
    .count('views.movie_id as view_count')
    .leftJoin('movies', 'movies.id', 'views.movie_id')
    .join('categories', 'categories.id', 'movies.category_id')
    .groupBy('movies.id')
    .orderBy('view_count', 'desc')
    .limit(12);
};

module.exports = {
  getMostPopularMovies,
};
