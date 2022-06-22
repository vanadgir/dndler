/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  console.log("Creating backgroundEquipments table");
  return knex.schema.createTable("backgroundEquipments", (t) => {
    t.bigIncrements("id");
    t.bigInteger("backgroundId")
      .notNullable()
      .unsigned()
      .index()
      .references("backgrounds.id");
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
  console.log("Rolling back backgroundEquipments table");
  return knex.schema.dropTableIfExists("backgroundEquipments");
};
