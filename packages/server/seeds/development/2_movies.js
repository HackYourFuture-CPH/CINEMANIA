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
      category_id: 7,
      title: 'A Beautiful Mind',
      description:
        'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
      movie_year: 2001,
      price: 90,
    },
    {
      category_id: 5,
      title: 'P.S. I Love You',
      description:
        'A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.',
      movie_year: 2007,
      price: 85,
    },
    {
      category_id: 7,
      title: 'Patch Adams',
      description:
        'The true story of a heroic man, Hunter Patch Adams, determined to become a medical doctor because he enjoys helping people. He ventured where no doctor had ventured before, using humour and pathos.',
      movie_year: 1998,
      price: 95,
    },
    {
      category_id: 5,
      title: 'I Can Only Imagine',
      description:
        'The inspiring and unknown true story behind MercyMes beloved, chart-topping song that brings ultimate hope to so many is a gripping reminder of the power of true forgiveness.',
      movie_year: 2018,
      price: 80,
    },
    {
      category_id: 5,
      title: 'Father of the Bride Collection',
      description:
        'Just when George Banks has recovered from his daughters wedding, he receives the news that shes pregnant ...and that Georges wife, Nina, is expecting too.He was planning on selling their home, but thats a plan.',
      movie_year: 1995,
      price: 90,
    },
  ]);
};
