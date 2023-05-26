const knex = require('../../config/db');

const getOriginalAmount = async (userID) => {
  const user = await knex('users').where('uid', userID).first();
  if (!user) {
    throw new Error('User not found');
  }

  return knex('tokens')
    .select('tokens.id', 'tokens.amount')
    .join('users', 'users.id', '=', 'tokens.user_id')
    .orderBy('last_updated', 'desc')
    .where({ uid: userID })
    .first();
};

module.exports = {
  getOriginalAmount,
};
