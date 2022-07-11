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
    t.bigInteger("equipment1Id")
      .notNullable()
      .unsigned()
      .index()
      .references("equipments.id");
    t.integer("equipment1Count").notNullable().defaultTo(1);
    t.bigInteger("equipment2Id").unsigned().index().references("equipments.id");
    t.integer("equipment2Count").notNullable().defaultTo(0);
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
