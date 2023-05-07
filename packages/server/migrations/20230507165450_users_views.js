/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments();
      table.string('full_name');
      table.string('email').unique().notNullable();
      table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    })
    .then(() => {
      return knex.schema.createTable('views', (table) => {
        table.increments();
        table.integer('movie_id').unsigned().notNullable();
        table.foreign('movie_id').references('id').inTable('movies');
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table
          .datetime('created_at', { precision: 6 })
          .defaultTo(knex.fn.now(6));
      });
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('views').then(() => {
    return knex.schema.dropTable('users');
  });
};
