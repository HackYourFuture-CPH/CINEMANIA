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
    {
      full_name: 'Ron Howard',
      birth_date: '1954-03-01',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tDKn6gAgvARdQRfuem2JwyNcP3B.jpg',
    },
    {
      full_name: 'Akiva Goldsman',
      birth_date: '1962-07-07',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zjnY7yoXZifRJR9x8hdGIm9ducG.jpg',
    },
    {
      full_name: 'Russell Crowe',
      birth_date: '1964-04-07',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mGTtPuwE8OR00tkJGmVLJmt8KpW.jpg',
    },
    {
      full_name: 'Jennifer Connelly',
      birth_date: '1970-12-12',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3oYDftEbM3YgBiHYcbbIPRNZrTL.jpg',
    },
    {
      full_name: 'Ed Harris',
      birth_date: '1950-11-28',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ryF0KkljweLhPkQ70x6w3u9Qjjj.jpg',
    },
    {
      full_name: 'Paul Bettany',
      birth_date: '1971-05-27',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oNrDowF5cRtK5lJJuCAh0KeFizy.jpg',
    },
    {
      full_name: 'Richard LaGravenese',
      birth_date: '1959-10-30',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4e70Bwm2K7pGM7u1dGTQBe3l8wi.jpg',
    },
    {
      full_name: 'Hilary Swank',
      birth_date: '1974-07-30',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yJ5QEzcUVbe08H3Lche33oEvH2G.jpg',
    },
    {
      full_name: 'Gerard Butler',
      birth_date: '1969-11-13',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hAKPWWvUyvcfqPcoBG45c8NRr6e.jpg',
    },
    {
      full_name: 'Lisa Kudrow',
      birth_date: '1963-07-30 ',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9YNzHuT7L0wdEl3zua6iUYz5tYT.jpg',
    },
    {
      full_name: 'Jeffrey Dean Morgan',
      birth_date: '1966-04-22',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m8bdrmh6ExDCGQ64E83mHg002YV.jpg',
    },
    {
      full_name: 'Tom Shadyac',
      birth_date: '1958-12-11',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kuliB1DrKSbdn2jxESncPbWxGrD.jpg',
    },
    {
      full_name: 'Robin Williams',
      birth_date: '1951-07-21',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iYdeP6K0qz44Wg2Nw9LPJGMBkQ5.jpg',
    },
    {
      full_name: 'Monica Potter',
      birth_date: '1971-06-30',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jCFOlFAjNPMkX9pJF2Au0cquZ6v.jpg',
    },
    {
      full_name: 'Philip Seymour Hoffman',
      birth_date: '1967-07-23',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/50rqDkmvXwjwVhFH7q6ph2Rkw7S.jpg',
    },
    {
      full_name: 'Jon Erwin',
      birth_date: '1982-05-19',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fO4FG0QD9gr4jr0mh7Y2BwFF5d3.jpg',
    },
    {
      full_name: 'J. Michael Finley',
      birth_date: '1988-08-10',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Aw2aNQg7mShRwVCUSgBYjaqE0hO.jpg',
    },
    {
      full_name: 'Dennis Quaid',
      birth_date: '1954-04-09',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nvkto83iFngO8jg9UpdSaEBRC8a.jpg',
    },
    {
      full_name: 'Cloris Leachman',
      birth_date: '1926-04-30',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o8pnV9urjuHZDAR2u4UjPy2CR1u.jpg',
    },
    {
      full_name: 'Madeline Carroll',
      birth_date: '1996-03-18',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rUXWRKgyf9vLoC4zSHlu5fHdtxR.jpg',
    },
    {
      full_name: 'Charles Shyer',
      birth_date: '1941-10-11',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/stcwg4mJKGQo0UBfWcXVQy6fOdP.jpg',
    },
    {
      full_name: 'Nancy Meyers',
      birth_date: '1949-12-08',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aK2lYDBYhWU9MJdNV0y1EvXiNo0.jpg',
    },
    {
      full_name: 'Steve Martin',
      birth_date: '1945-08-14 ',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d0KthX8hVWU9BxTCG1QUO8FURRm.jpg',
    },
    {
      full_name: 'Diane Keaton',
      birth_date: '1946-01-05',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9WfaYj5iBMyDX4IJyM1bdMRD3x6.jpg',
    },
    {
      full_name: 'Kimberly Williams-Paisley',
      birth_date: '1971-09-14',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ4kWr4mDeKWenPeMOff8VtuAIq.jpg',
    },
    {
      full_name: 'Martin Short',
      birth_date: '1950-03-26',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vWoZIOk7K8TSKu1IN90akswsWjZ.jpg',
    },
    {
      full_name: 'Matthew McConaughey',
      birth_date: '1969-11-04',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sY2mwpafcwqyYS1sOySu1MENDse.jpg',
    },
    {
      full_name: 'Anne Hathaway',
      birth_date: '1982-11-12',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg',
    },
    {
      full_name: 'Jessica Chastain',
      birth_date: '1977-03-24',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg',
    },
    {
      full_name: 'Bill Irwin',
      birth_date: '1950-04-11',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bAV5qsljgiHQkn3QluB5clVYC13.jpg',
    },
    {
      full_name: 'Ellen Burstyn',
      birth_date: '1932-12-07',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/57gu12UWYWtphrzlccJQfw8lORm.jpg',
    },
    {
      full_name: 'Leonardo DiCaprio',
      birth_date: '1974-11-11',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
    },
    {
      full_name: 'Kate Winslet',
      birth_date: '1975-10-05',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e3tdop3WhseRnn8KwMVLAV25Ybv.jpg',
    },
    {
      full_name: 'Billy Zane',
      birth_date: '1966-02-24',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7CBwxqE00aZAAEBaRkapylgdi15.jpg',
    },
    {
      full_name: 'Kathy Bates',
      birth_date: '1948-06-28',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3MsayDvY73uXGVbCFHyy1ABTacV.jpg',
    },
    {
      full_name: 'Frances Fisher',
      birth_date: '1952-05-11',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tsyGcoXGRNM8KGLpLG3OuxAyxx2.jpg',
    },
    {
      full_name: 'Gloria Stuart',
      birth_date: '1910-07-04',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9aG7UUX3PWIGGf1KRY5TsBSoNz9.jpg',
    },
    {
      full_name: 'James Cameron',
      birth_date: '1954-08-16',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9NAZnTjBQ9WcXAQEzZpKy4vdQto.jpg',
    },
    {
      full_name: 'Jodie Foster',
      birth_date: '1962-11-19',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8DAd9knKivHR4CCStxlNEQXzjIh.jpg',
    },
    {
      full_name: 'Anthony Hopkins',
      birth_date: '1937-12-31',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9ukJS2QWTJ22HcwR1ktMmoJ6RSL.jpg',
    },
    {
      full_name: 'Scott Glenn',
      birth_date: '1939-01-26',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t3t8UK98DnAPOZE8IGsEUCDjcjp.jpg',
    },
    {
      full_name: 'Ted Levine',
      birth_date: '1957-05-29',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qRFq8y842T1uq51iQCwsEmQI3UT.jpg',
    },
    {
      full_name: 'Anthony Heald',
      birth_date: '1944-08-25',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e0E6Z1Y0debr4mAHgj0HO7MYyXG.jpg',
    },
    {
      full_name: 'Brooke Smith',
      birth_date: '1967-05-22',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A0D7CqSZ0rjlq83M4GMM4CcoUTA.jpg',
    },
    {
      full_name: 'Jonathan Demme',
      birth_date: '1944-02-22',
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w9Lw3xTEFQUYELkl9AH5i3p5OhJ.jpg',
    },
    {
      full_name: 'Ted Tally',
      birth_date: '1952-04-09',
      image_location: '',
    },
  ]);
};
