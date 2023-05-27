/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.integer('order_id').unsigned();
    table.foreign('order_id').references('id').inTable('orders');
    table.integer('movie_id').unsigned();
    table.foreign('movie_id').references('id').inTable('movies');
    // Add unique constraint
    table.unique(['order_id', 'movie_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('order_items');
};
