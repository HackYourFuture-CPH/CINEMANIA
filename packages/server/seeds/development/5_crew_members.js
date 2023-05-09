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
    {
      full_name: 'Christian Bale',
      birth_date: '1974-01-30',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b7fTC9WFkgqGOv77mLQtmD4Bwjx.jpg',
    },
    {
      full_name: 'Heath Ledger',
      birth_date: '1979-04-04',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg',
    },
    {
      full_name: 'Michael Caine',
      birth_date: '1933-03-14',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hZruclwEPCKw3e83rnFSIH5sRFZ.jpg',
    },
    {
      full_name: 'Gary Oldman',
      birth_date: '1958-03-21',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg',
    },
    {
      full_name: 'Aaron Eckhart',
      birth_date: '1968-03-12',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5EFQvRHlpP1Iaw2e6vjOaBny6DV.jpg',
    },
    {
      full_name: 'Maggie Gyllenhaal',
      birth_date: '1977-11-16',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7P1o6b4gZj7ICF847m8EXEyw2vV.jpg',
    },
    {
      full_name: 'Morgan Freeman',
      birth_date: '1937-06-01',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jPsLqiYGSofU4s6BjrxnefMfabb.jpg',
    },
    {
      full_name: 'Christopher Nolan',
      birth_date: '1970-07-30',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg',
    },
    {
      full_name: 'Jonathan Nolan',
      birth_date: '1976-06-06',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qd8d381vz2skpreY1BfVuSfLJts.jpg',
    },
    {
      full_name: 'David S. Goyer',
      birth_date: '1965-12-22',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gf44Hr3HJuWK7ZMHQKzDNBe0ylI.jpg',
    },
  ]);
};
