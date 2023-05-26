const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getAccountBalance = async (userId) => {
  if (!userId.match(/^\d+$/)) {
    return Promise.reject(new Error('Invalid user ID format'));
  }

  const user = await knex('users').where('id', userId).first();
  if (!user) {
    throw new HttpError('User not found', 404);
  }

  return knex('tokens')
    .select('tokens.amount')
    .from('tokens')
    .join('users', 'users.uid', '=', 'tokens.user_id')
    .where('users.id', userId)
    .orderBy('tokens.last_updated', 'desc')
    .limit(1);
};

module.exports = {
  getAccountBalance,
};
