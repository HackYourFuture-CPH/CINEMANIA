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
      category_id: 5,
      title: 'Renfield',
      description:
        "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
      movie_year: 2023,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg',
      price: 120,
    },
    {
      category_id: 4,
      title: 'Spirited Away',
      description:
        ' A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
      movie_year: 2001,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yvmDnuG9KnNypQgoMSWiXitft16.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: "Howl's Moving Castle",
      description:
        'When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
      movie_year: 2004,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yeJ5Nj1k2NA0bBZjkZ10PvQKjTD.jpg',
      price: 110,
    },
    {
      category_id: 10,
      title: 'Parasite',
      description:
        "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      movie_year: 2019,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
      price: 180,
    },
    {
      category_id: 2,
      title: 'Joker',
      description:
        'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure',
      movie_year: 2019,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      price: 200,
    },
  ]);
};
