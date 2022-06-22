/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  console.log("Creating backgrounds table");
  return knex.schema.createTable("backgrounds", (t) => {
    t.bigIncrements("id");
    t.string("subType").unique();
    t.string("title").notNullable().unique();
    t.text("traits").notNullable();
    t.text("ideals").notNullable();
    t.text("bonds").notNullable();
    t.text("flaws").notNullable();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back backgrounds table");
  return knex.schema.dropTableIfExists("backgrounds");
};
