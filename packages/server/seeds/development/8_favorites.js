/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('favorites').del();
  await knex('favorites').insert([
    { movie_id: 1, user_id: 1, comment: 'I love this movie' },
    { movie_id: 2, user_id: 2, comment: 'I like this movie' },
    { movie_id: 3, user_id: 4, comment: 'I enjoyed this movie' },
    { movie_id: 4, user_id: 5, comment: 'I love this movie' },
    { movie_id: 5, user_id: 3, comment: 'I like this movie' },
    { movie_id: 6, user_id: 1, comment: 'I enjoyed this movie' },
    { movie_id: 7, user_id: 2, comment: 'I like this movie' },
    { movie_id: 8, user_id: 4, comment: 'I will watch this movie again' },
    { movie_id: 9, user_id: 5, comment: 'I love this movie' },
  ]);
};
