/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating proficiencies table");
  return knex.schema.createTable("proficiencies", (t) => {
    t.bigIncrements("id");
    t.string("title").notNullable().unique();
    t.string("category").notNullable();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back proficiencies table");
  return knex.schema.dropTableIfExists("proficiencies");
};
