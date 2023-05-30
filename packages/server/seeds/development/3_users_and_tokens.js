/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tokens').del();
  await knex('users').del();
  await knex('users').insert([
    {
      full_name: 'Ada Lovelace',
      email: 'ada.lovelace@example.com',
      uid: 'A9x50O4wAfbHVr9PrhGY1q2rvO13',
    },
    {
      full_name: 'Grace Hopper',
      email: 'grace.hopper@example.com',
      uid: '523',
    },
    {
      full_name: 'Alan Turing',
      email: 'alan.turing@example.com',
      uid: '',
    },
    {
      full_name: 'Vint Cerf',
      email: 'vint.cerf@example.com',
      uid: 'dhjdhd1',
    },
    {
      full_name: 'Tim Berners-Lee',
      email: 'tim.berners.lee@example.com',
      uid: '1bchbwjdee',
    },
    {
      full_name: 'Katherine Johnson',
      email: 'katherine.johnson@example.com',
      uid: '5bcm82jdnf',
    },
    {
      full_name: 'Elon Musk',
      email: 'elon.musk@example.com',
      uid: '6vbm9ahc72',
    },
    {
      full_name: 'Marie Curie',
      email: 'marie.curie@example.com',
      uid: '7hjfnb5n4a',
    },
    {
      full_name: 'Nikola Tesla',
      email: 'nikola.tesla@example.com',
      uid: '8mcs3hd63n',
    },
    {
      full_name: 'Rosalind Franklin',
      email: 'rosalind.franklin@example.com',
      uid: '9nfh2mz6bs',
    },

    {
      full_name: 'Albert Einstein',
      email: 'albert.einstein@example.com',
      uid: '0sv1kj2mcd',
    },
  ]);
  await knex('tokens').insert([
    {
      user_id: 1,
      amount: 100.0,
    },
    {
      user_id: 2,
      amount: 100.0,
    },
    {
      user_id: 3,
      amount: 100.0,
    },
    {
      user_id: 4,
      amount: 100.0,
    },
    {
      user_id: 5,
      amount: 100.0,
    },
  ]);
};
