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
    { movie_id: 9, crew_member_id: 4, role: 'Actor' },
    { movie_id: 9, crew_member_id: 5, role: 'Actor' },
    { movie_id: 9, crew_member_id: 6, role: 'Director' },
    { movie_id: 10, crew_member_id: 7, role: 'Actor' },
    { movie_id: 10, crew_member_id: 8, role: 'Actor' },
    { movie_id: 10, crew_member_id: 9, role: 'Actor' },
    { movie_id: 11, crew_member_id: 10, role: 'Actor' },
    { movie_id: 11, crew_member_id: 11, role: 'Actor' },
    { movie_id: 11, crew_member_id: 12, role: 'Actor' },
  ]);
};
