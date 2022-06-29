/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating personalityFlaws table");
  return knex.schema.createTable("personalityFlaws", (t) => {
    t.bigIncrements("id");
    t.bigInteger("backgroundId")
      .notNullable()
      .unsigned()
      .index()
      .references("backgrounds.id");
    t.text("text").notNullable().unique();
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back personalityFlaws table");
  return knex.schema.dropTableIfExists("personalityFlaws");
};
