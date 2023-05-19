const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getUserReviewByID = async (movieID, userID) => {
  if (!movieID) {
    throw new HttpError('Movie ID should be a number', 400);
  }
  if (!userID) {
    throw new HttpError('Please input valid user ID', 400);
  }
  try {
    const userReview = knex('reviews as r')
      .select(
        'm.description',
        'm.backdrop_URL',
        'm.title',
        'r.rating',
        'r.review_text',
        'r.created_at',
      )
      .join('movies as m', 'm.id', '=', 'r.movie_id')
      .where('m.id', movieID)
      .where('r.user_id', userID)
      .orderBy('r.created_at', 'desc')
      .limit(9);
    if (userReview.length === 0) {
      return {
        message: `No reviews created by user ${userID}for the movie:${movieID}`,
      };
    }
    return userReview;
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = {
  getUserReviewByID,
};
