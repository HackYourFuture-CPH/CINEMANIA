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
    {
      full_name: 'Michael J. Fox',
      birth_date: '1961-06-09',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2JB4FMgQmnhbBlQ4SxWFN9EIVDi.jpg',
    },
    {
      full_name: 'Hugh Lauries',
      birth_date: '1959-06-11',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lpu443aKW5aKzVnV4xjiqvD1DnK.jpg',
    },
    {
      full_name: 'Rob Minkoff',
      birth_date: '1962-08-11',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fn5QA0bqJn6tk4Wt1QonjojFPjd.jpg',
    },
    {
      full_name: 'Ben Affleck',
      birth_date: '1972-08-15',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u525jeDOzg9hVdvYfeehTGnw7Aa.jpg',
    },
    {
      full_name: 'Rosamund Pike',
      birth_date: '1979-01-27',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8ObNklHDi2hjdz0ayzJFB9jtqzm.jpg',
    },
    {
      full_name: 'Carrie Coon',
      birth_date: '1981-01-24',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eQ5IMkPYGO6aqzturQWxGuDO1QD.jpg',
    },
    {
      full_name: 'María Evoli',
      birth_date: '1990-10-02',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p78WRIhibZZumXaMRqEoQmWjCJw.jpg',
    },
    {
      full_name: 'Tina Romero',
      birth_date: '1949-08-14',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gzeysO6gLolZXUFg0Ja1C34waWd.jpg',
    },
    {
      full_name: 'Julio Bracho',
      birth_date: '1970-09-20',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p6F38o1SOCSdNIUwwoih8aIS7Ak.jpg',
    },
  ]);
};
