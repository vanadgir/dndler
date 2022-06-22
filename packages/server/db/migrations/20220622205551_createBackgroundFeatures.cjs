/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating backgroundFeatures table");
  return knex.schema.createTable("backgroundFeatures", (t) => {
    t.bigIncrements("id");
    t.bigInteger("backgroundId")
      .notNullable()
      .unsigned()
      .index()
      .references("backgrounds.id");
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
  console.log("Rolling back backgroundFeaturess table");
  return knex.schema.dropTableIfExists("backgroundFeatures");
};
