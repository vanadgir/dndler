/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating classSkills table");
  return knex.schema.createTable("classSkills", (t) => {
    t.bigIncrements("id");
    t.bigInteger("classId").notNullable().unsigned().index().references("classes.id");
    t.bigInteger("skillId").notNullable().unsigned().index().references("skills.id");
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
 }

 /**
  * @param {Knex} knex
  */
 exports.down = (knex) => {
  console.log("Rolling back classSkills table");
  return knex.schema.dropTableIfExists("classSkills");
 }