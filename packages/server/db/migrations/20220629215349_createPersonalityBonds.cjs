/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating personalityBonds table");
  return knex.schema.createTable("personalityBonds", (t) => {
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
  console.log("Rolling back personalityBonds table");
  return knex.schema.dropTableIfExists("personalityBonds");
};
