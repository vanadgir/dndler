/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating featureSpells table");
  return knex.schema.createTable("featureSpells", (t) => {
    t.bigIncrements("id");
    t.bigInteger("featureId")
      .notNullable()
      .unsigned()
      .index()
      .references("features.id");
    t.bigInteger("spellId")
      .notNullable()
      .unsigned()
      .index()
      .references("spells.id");
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back featureSpells table");
  return knex.schema.dropTableIfExists("featureSpells");
};
