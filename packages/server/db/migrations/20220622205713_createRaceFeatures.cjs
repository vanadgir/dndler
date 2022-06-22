/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating raceFeatures table");
  return knex.schema.createTable("raceFeatures", (t) => {
    t.bigIncrements("id");
    t.bigInteger("raceId")
      .notNullable()
      .unsigned()
      .index()
      .references("races.id");
    t.bigInteger("featureId")
      .notNullable()
      .unsigned()
      .index()
      .references("features.id");
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back raceFeatures table");
  return knex.schema.dropTableIfExists("raceFeatures");
};
