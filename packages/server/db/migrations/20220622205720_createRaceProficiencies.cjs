/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating raceProficiencies table");
  return knex.schema.createTable("raceProficiencies", (t) => {
    t.bigIncrements("id");
    t.bigInteger("raceId")
      .notNullable()
      .unsigned()
      .index()
      .references("races.id");
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
  console.log("Rolling back raceProficiencies table");
  return knex.schema.dropTableIfExists("raceProficiencies");
};
