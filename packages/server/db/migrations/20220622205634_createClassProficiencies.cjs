/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating classProficiencies table");
  return knex.schema.createTable("classProficiencies", (t) => {
    t.bigIncrements("id");
    t.bigInteger("classId")
      .notNullable()
      .unsigned()
      .index()
      .references("classes.id");
    t.bigInteger("proficiencyId")
      .notNullable()
      .unsigned()
      .index()
      .references("proficiencies.id");
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back classProficiencies table");
  return knex.schema.dropTableIfExists("classProficiencies");
};
