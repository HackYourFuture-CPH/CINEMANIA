/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del();
  await knex('reviews').insert([
    {
      id: 1,
      movie_id: 1,
      user_id: 3,
      rating: 5,
      review_text:
        'I love The Matrix! It is definitely most masterpiece movie I had ever seen. I give this masterpiece film a 10/10!',
    },
    {
      id: 2,
      movie_id: 2,
      user_id: 3,
      rating: 5,
      review_text:
        'This movie is the go-to one for me whenever I feel down or whenever I need some sort of motivation. This movie will melt even the hardest hearts, it will always keep you engaged, for each and every second!',
    },
    {
      id: 3,
      movie_id: 1,
      user_id: 5,
      rating: 4,
      review_text:
        'This movie is truly one of the greats it has stood the test of time in more ways than one. Overall great movie with quotable limes and memriable scenes.',
    },
    {
      id: 4,
      movie_id: 2,
      user_id: 5,
      rating: 4,
      review_text:
        'This movie is so powerful. The only problem is that it is not very realistic or historically accurate, but even with the mistakes it is definitely worth watching.',
    },
    {
      id: 5,
      movie_id: 1,
      user_id: 1,
      rating: 3,
      review_text:
        'I quite enjoyed it, but it was strange. Keanu Reeves was brilliant as Neo, and fit the role quite well. But there a lot of unexplained things. So overall a good movie, but with a range of flaws.',
    },
    {
      id: 6,
      movie_id: 2,
      user_id: 1,
      rating: 4,
      review_text:
        'One should must watch this flick to understand the essence of life through some rough aspects. An absolute relatable entertainer with a hope for survival.',
    },
  ]);
};
