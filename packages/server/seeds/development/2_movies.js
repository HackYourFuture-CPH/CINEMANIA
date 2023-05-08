/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del();
  await knex('movies').insert([
    {
      category_id: 8,
      title: 'The Matrix',
      description:
        'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      movie_year: 1999,
      price: 100,
    },
    {
      category_id: 3,
      title: 'The Shawshank Redemption',
      description:
        'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
      movie_year: 1994,
      price: 80,
    },
    {
      category_id: 8,
      title: 'Interstellar',
      description:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      movie_year: 2014,
      price: 180,
    },
  ]);
};
