/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  console.log("Creating backgroundProficiencies table");
  return knex.schema.createTable("backgroundProficiencies", (t) => {
    t.bigIncrements("id");
    t.bigInteger("backgroundId")
      .notNullable()
      .unsigned()
      .index()
      .references("backgrounds.id");
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
  console.log("Rolling back backgroundProficiencies table");
  return knex.schema.dropTableIfExists("backgroundProficiencies");
};
