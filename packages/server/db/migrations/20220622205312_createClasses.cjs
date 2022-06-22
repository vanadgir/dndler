/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating classes table");
  return knex.schema.createTable("classes", (t) => {
    t.bigIncrements("id");
    t.string("subType").unique();
    t.string("title").notNullable().unique();
    t.integer("hitDie").notNullable();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back classes table");
  return knex.schema.dropTableIfExists("classes");
};
