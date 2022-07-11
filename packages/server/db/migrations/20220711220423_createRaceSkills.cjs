/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating raceSkills table");
  return knex.schema.createTable("raceSkills", (t) => {
    t.bigIncrements("id");
    t.bigInteger("raceId").notNullable().unsigned().index().references("races.id");
    t.bigInteger("skillId").notNullable().unsigned().index().references("skills.id");
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
 }

 /**
  * @param {Knex} knex
  */
 exports.down = (knex) => {
  console.log("Rolling back raceSkills table");
  return knex.schema.dropTableIfExists("raceSkills");
 }