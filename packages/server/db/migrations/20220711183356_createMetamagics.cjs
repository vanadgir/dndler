/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating metamagics table");
  return knex.schema.createTable("metamagics", (t) => {
    t.bigIncrements("id");
    t.string("title").notNullable().unique();
    t.text("description").notNullable();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
 }

 /**
  * @param {Knex} knex
  */
 exports.down = (knex) => {
  console.log("Rolling back metamagics table");
  return knex.schema.dropTableIfExists("metamagics");
 }