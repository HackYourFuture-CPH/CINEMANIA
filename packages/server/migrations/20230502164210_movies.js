/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.integer('category_id').unsigned();
    table.foreign('category_id').references('id').inTable('categories');
    table.string('title').notNullable();
    table.string('description', 500).notNullable();
    table.integer('movie_year').unsigned();
    table.string('image_location');
    table.string('backdropURL');
    table.decimal('price').notNullable();
    table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('movies');
};
