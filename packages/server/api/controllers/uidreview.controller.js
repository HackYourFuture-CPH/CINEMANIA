const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getReviewByUid = async (id, uid) => {
  if (!id) {
    throw new HttpError('Movie ID should be a number', 400);
  }
  if (!uid) {
    throw new HttpError('Please input valid user ID', 400);
  }
  try {
    const userReview = knex('reviews as r')
      .select(
        'm.title',
        'm.description',
        'u.full_name',
        'u.uid',
        'r.rating',
        'r.review_text',
        'r.created_at',
      )
      .join('movies as m', 'm.id', '=', 'r.movie_id')
      .join('users as u', 'u.id', '=', 'r.user_id')
      .where('m.id', id)
      .where('u.uid', uid)
      .orderBy('r.created_at', 'desc')
      .limit(9);
    if (userReview.length === 0) {
      return {
        message: `No reviews created by user for the movie`,
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
  getReviewByUid,
};
