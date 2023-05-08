/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('crew_members').del();
  await knex('crew_members').insert([
    {
      full_name: 'Tom Ellis',
      birth_date: '1978-11-17',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zhjIyqpk5bsYgxsh5bSeS6VZtHm.jpg',
    },
  ]);
};
