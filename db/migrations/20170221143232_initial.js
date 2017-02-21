
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('proteins', function(table){
    table.increments('proteinId').primary();
    table.string('proteinName').notNullable();
  })
  .createTable('sideSelections', funciton(table){
    table.increments('sideSelectionId').primary();
    table.integer('menuItemId')
    table.integer('sideSelectionId');
  })
  .createTable('menuItems', function(table){
    table.increments('menuItemId').primary();
    table.string('menuItemName').notNullable().unique();
    table.integer('proteinId');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('menuItems')
    .dropTable('proteins')
};

