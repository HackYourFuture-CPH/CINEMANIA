/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('crew_members', (table) => {
      table.increments();
      table.string('full_name').notNullable();
      table.datetime('birth_date');
      table.string('image_location');
      table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    })
    .createTable('movie_crew', (table) => {
      table.integer('movie_id').unsigned();
      table.foreign('movie_id').references('id').inTable('movies');
      table.integer('crew_member_id').unsigned();
      table.foreign('crew_member_id').references('id').inTable('crew_members');
      table.string('role').notNullable();
      table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('movie_crew').dropTable('crew_members');
};
