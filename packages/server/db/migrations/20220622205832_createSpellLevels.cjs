/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating spellLevels table");
  return knex.schema.createTable("spellLevels", (t) => {
    t.string("id").notNullable().unique();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back spellLevels table");
  return knex.schema.dropTableIfExists("spellLevels");
};
