/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  console.log("Creating skills table");
  return knex.schema.createTable("skills", (t) => {
    t.bigIncrements("id");
    t.string("attributeId")
      .notNullable()
      .references("attributes.id");
    t.string("name").notNullable().unique();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back skills table");
  return knex.schema.dropTableIfExists("skills");
};
