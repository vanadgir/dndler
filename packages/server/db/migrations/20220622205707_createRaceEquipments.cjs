/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating raceEquipments table");
  return knex.schema.createTable("raceEquipments", (t) => {
    t.bigIncrements("id");
    t.bigInteger("raceId")
      .notNullable()
      .unsigned()
      .index()
      .references("races.id");
    t.bigInteger("equipmentId")
      .notNullable()
      .unsigned()
      .index()
      .references("equipments.id");
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log("Rolling back raceEquipments table");
  return knex.schema.dropTableIfExists("raceEquipments");
};
