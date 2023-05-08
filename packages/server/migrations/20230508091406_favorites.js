/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.integer('movie_id').unsigned().notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.string('comment');
    table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.foreign('movie_id').references('movies.id');
    table.foreign('user_id').references('users.id');
    table.primary(['movie_id', 'user_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('favorites');
};
