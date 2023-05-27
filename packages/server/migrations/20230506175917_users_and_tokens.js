/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments();
      table.string('full_name').notNullable();
      table.string('email').notNullable().unique();
      table.string('uid').notNullable().unique();
      table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    })
    .createTable('tokens', (table) => {
      table.increments();
      table.string('user_id').notNullable().unique();
      table.foreign('user_id').references('uid');
      table.decimal('amount');
      table
        .datetime('last_updated', { precision: 6 })
        .defaultTo(knex.fn.now(6));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('tokens').dropTable('users');
};
