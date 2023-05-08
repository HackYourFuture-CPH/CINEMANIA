/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('crew_members').del();
  await knex('crew_members').insert([
    {
      full_name: 'Tom Hardy',
      birth_date: '1977-09-15',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg',
    },
    {
      full_name: 'Emily Browning',
      birth_date: '1988-12-07',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/silK3Pdugbf1YOtIdXev1eZxzvF.jpg',
    },
    {
      full_name: 'Chazz Palminteri',
      birth_date: '1952-05-15',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mCbjKVyE5B2tleshbJw44tw3ktZ.jpg',
    },
  ]);
};
