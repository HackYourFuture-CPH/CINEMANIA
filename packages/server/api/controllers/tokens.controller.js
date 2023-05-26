const knex = require('../../config/db');

const getAccountBalance = async (userId) => {
  if (!userId.match(/^\d+$/)) {
    return Promise.reject(new Error('Invalid user ID format'));
  }

  const user = await knex('users').where('id', userId).first();
  if (!user) {
    throw new Error('User not found');
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
