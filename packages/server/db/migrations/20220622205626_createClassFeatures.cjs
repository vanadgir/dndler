/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating classFeatures table");
  return knex.schema.createTable("classFeatures", (t) => {
    t.bigIncrements("id");
    t.bigInteger("classId")
      .notNullable()
      .unsigned()
      .index()
      .references("classes.id");
    t.bigInteger("featureId")
      .notNullable()
      .unsigned()
      .index()
      .references("features.id");
    t.integer("level").notNullable();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back classFeatures table");
  return knex.schema.dropTableIfExists("classFeatures");
};
