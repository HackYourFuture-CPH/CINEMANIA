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
      uid: 'hMIIhfZobnS2eMxtsKRF44nvcna2',
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
