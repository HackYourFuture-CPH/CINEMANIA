/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('views').del();
  await knex('views').insert([
    { movie_id: 1, user_id: 1 },
    { movie_id: 2, user_id: 2 },
    { movie_id: 1, user_id: 3 },
    { movie_id: 2, user_id: 4 },
  ]);
};
