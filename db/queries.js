var knex = require('./knex.js');

function Meals() {
  return knex('meals');
}

// *** queries *** //

function getAll() {
  return Meals().select();
}

function getSingle(mealId) {
  return Meals().where('mealId', parseInt(mealId)).first();
}

function getSides(mealId) {
  return knex('sides')
    .where('sideSelections.mealId', parseInt(mealId))
    .join('sideSelections', 'sideSelections.sideId', 'sides.sideId')
    .join('meals', 'sideSelections.mealId', 'meals.mealId')
    .select('sides.sideName')
}

  // return knex('recipes')
  // .join('cooktypes', 'recipes.cooktypeId', 'cooktypes.cooktypeId')
  // .select('*')

module.exports = {
  getAll, getSingle, getSides
};