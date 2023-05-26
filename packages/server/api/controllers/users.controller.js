const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// POST NEW USER AND TOKENS BALANCE
const createUser = async (body) => {
  try {
    const existingUser = await knex('users')
      .where('uid', body.uid)
      .orWhere('email', body.email)
      .first();

    if (existingUser) {
      return {
        statusCode: 409,
        message: 'User already exists',
      };
    }

    await knex('users').insert({
      full_name: body.full_name,
      email: body.email,
      uid: body.uid,
    });

    await knex('tokens').insert({
      user_id: body.uid,
      amount: 1000,
    });

    return {
      statusCode: 201,
      message: 'User created successfully',
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: error.message,
    };
  }
};
// Get
const getUserIdByUid = async (uid) => {
  if (!uid) {
    throw new HttpError("The user hasn't logged in", 400);
  }
  try {
    const user = await knex('users').select('id', 'uid').where('uid', uid);
    return user;
  } catch (error) {
    throw new HttpError(error.message, 500);
  }
};
module.exports = {
  createUser,
  getUserIdByUid,
};
