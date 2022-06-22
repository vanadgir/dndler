/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating equipments table");
  return knex.schema.createTable("equipments", (t) => {
    t.bigIncrements("id");
    t.string("type").notNullable();
    t.string("title").notNullable().unique();
    t.string("value").notNullable();
    t.string("weight").notNullable();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back equipments table");
  return knex.schema.dropTableIfExists("equipments");
};
