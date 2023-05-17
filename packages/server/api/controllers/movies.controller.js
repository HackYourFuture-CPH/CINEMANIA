/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

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
        'm.backdrop_URL',
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
        'm.backdrop_URL',
        'm.category_id',
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

const getMovies = async (queryParams) => {
  const {
    sortBy = 'rating',
    categoryId = null,
    userId = null,
    title = null,
    pageNumber = 1,
    pageSize = 30,
    isFavoritePage = 'false',
  } = queryParams;

  const offset = (pageNumber - 1) * pageSize;

  const moviesQuery = knex('movies')
    .leftJoin('reviews', 'reviews.movie_id', '=', 'movies.id')
    .select(
      'movies.id',
      'movies.title',
      'movies.description',
      'movies.movie_year',
      'movies.image_location',
      'movies.backdrop_URL',
      'movies.created_at',
      'movies.price',
      'movies.category_id',
      knex.raw('AVG(IFNULL(reviews.rating, 0)) as  average_rating'),
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
        queryBuilder.where('movies.category_id', '=', categoryId);
      }

      if (sortBy === 'rating') {
        queryBuilder.orderBy('average_rating', 'desc');
      }

      if (sortBy === 'recently_added') {
        queryBuilder.orderBy('movies.created_at', 'desc');
      }

      if (sortBy === 'price') {
        queryBuilder.orderBy('movies.price', 'asc');
      }

      if (title) {
        queryBuilder.where('movies.title', 'like', `%${title}%`);
      }

      if (isFavoritePage === 'true') {
        queryBuilder
          .join('favorites', 'favorites.movie_id', '=', 'movies.id')
          .where('favorites.user_id', '=', userId);
      }

      queryBuilder.limit(pageSize).offset(offset);
    });

  const countQuery = knex('movies')
    .modify((queryBuilder) => {
      if (categoryId) {
        queryBuilder.where('movies.category_id', '=', categoryId);
      }

      if (title) {
        queryBuilder.where('movies.title', 'like', `%${title}%`);
      }
    })
    .count('movies.id as totalMovies');

  const [movies, [{ totalMovies }]] = await Promise.all([
    moviesQuery,
    countQuery,
  ]);

  const totalPages = Math.ceil(totalMovies / pageSize);

  const pagination = {
    pageNumber,
    pageSize,
    totalMovies,
    totalPages,
  };

  const formattedMovies = movies.map((movie) => ({
    ...movie,
    is_favorite: movie.is_favorite === 1,
  }));

  return {
    pagination,
    movies: formattedMovies,
  };
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
      backdrop_URL: lastMovie.backdrop_URL,
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
  getDetailsOfMovieByID,
  getMoviesByCategory,
  getFeaturedMovie,
};
