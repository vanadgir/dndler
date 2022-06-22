/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating spells table");
  return knex.schema.createTable("spells", (t) => {
    t.bigIncrements("id");
    t.string("title").notNullable().unique();
    t.string("school").notNullable();
    t.string("castingTime").notNullable();
    t.string("range").notNullable();
    t.string("duration").notNullable();
    t.string("components").notNullable();
    t.text("description").notNullable();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back spells table");
  return knex.schema.dropTableIfExists("spells");
};
