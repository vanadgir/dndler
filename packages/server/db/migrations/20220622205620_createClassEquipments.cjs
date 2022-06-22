/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  console.log("Creating classEquipments table");
  return knex.schema.createTable("classEquipments", (t) => {
    t.bigIncrements("id");
    t.bigInteger("classId")
      .notNullable()
      .unsigned()
      .index()
      .references("classes.id");
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
  console.log("Rolling back classEquipments table");
  return knex.schema.dropTableIfExists("classEquipments");
};
