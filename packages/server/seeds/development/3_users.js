/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      full_name: 'Ada Lovelace',
      email: 'ada.lovelace@example.com',
    },
    {
      full_name: 'Grace Hopper',
      email: 'grace.hopper@example.com',
    },
    {
      full_name: 'Alan Turing',
      email: 'alan.turing@example.com',
    },
    {
      full_name: 'Vint Cerf',
      email: 'vint.cerf@example.com',
    },
    {
      full_name: 'Tim Berners-Lee',
      email: 'tim.berners.lee@example.com',
    },
  ]);
};
