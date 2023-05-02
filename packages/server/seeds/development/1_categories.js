/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categories').del();
  await knex('categories').insert([
    { name: 'Action' },
    { name: 'Crime' },
    { name: 'Drama' },
    { name: 'Fantasy' },
    { name: 'Horror' },
    { name: 'Comedy' },
    { name: 'Romance' },
    { name: 'Scifi' },
    { name: 'Sports' },
    { name: 'Thriller' },
    { name: 'Mystery' },
    { name: 'War' },
    { name: 'Western' },
  ]);
};
