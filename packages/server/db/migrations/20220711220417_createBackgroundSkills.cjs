/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating backgroundSkills table");
  return knex.schema.createTable("backgroundSkills", (t) => {
    t.bigIncrements("id");
    t.bigInteger("backgroundId").notNullable().unsigned().index().references("backgrounds.id");
    t.bigInteger("skillId").notNullable().unsigned().index().references("skills.id");
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
 }

 /**
  * @param {Knex} knex
  */
 exports.down = (knex) => {
  console.log("Rolling back backgroundSkills table");
  return knex.schema.dropTableIfExists("backgroundSkills");
 }