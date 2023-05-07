/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { full_name: 'John Doe', email: 'johndoe@example.com' },
    { full_name: 'Jane Smith', email: 'janesmith@example.com' },
    { full_name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { full_name: 'Mary Williams', email: 'marywilliams@example.com' },
  ]);
};
