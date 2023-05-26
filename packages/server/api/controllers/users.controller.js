const knex = require('../../config/db');

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

module.exports = {
  createUser,
};
