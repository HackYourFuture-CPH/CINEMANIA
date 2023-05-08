/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movie_crew').del();
  await knex('movie_crew').insert([
    { movie_id: 8, crew_member_id: 1, role: 'Actor' },
    { movie_id: 8, crew_member_id: 2, role: 'Actor' },
    { movie_id: 8, crew_member_id: 3, role: 'Actor' },
  ]);
};
