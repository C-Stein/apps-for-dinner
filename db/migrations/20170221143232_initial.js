
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('proteins', function(table){
    table.increments('proteinId').primary();
    table.string('proteinName').notNullable();
  })
  .createTable('meals', function(table){
    table.increments('mealId').primary();
    table.string('mealName').notNullable().unique();
    table.integer('proteinId');
  })
  .createTable('sides', function(table){
    table.increments('sideId').primary();
    table.string('sideName')
  })
  .createTable('sideSelections', function(table){
    table.increments('sideSelectionId').primary();
    table.integer('mealId')
    table.integer('sideId');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('sideSelections')
    .dropTable('sides')
    .dropTable('meals')
    .dropTable('proteins')
};

