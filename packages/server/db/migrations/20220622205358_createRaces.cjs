/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating races table");
  return knex.schema.createTable("races", (t) => {
    t.bigIncrements("id");
    t.string("subType").unique();
    t.string("title").notNullable().unique();
    t.specificType("bonuses", "int ARRAY").notNullable();
    t.string("size");
    t.specificType("speeds", "int ARRAY").notNullable();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back races table");
  return knex.schema.dropTableIfExists("races");
};
