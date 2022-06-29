/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating features table");
  return knex.schema.createTable("features", (t) => {
    t.bigIncrements("id");
    t.string("title").notNullable().unique();
    t.specificType("description", "text ARRAY").notNullable();
    t.specificType("atHigherLevels", "text ARRAY");
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back features table");
  return knex.schema.dropTableIfExists("features");
};
