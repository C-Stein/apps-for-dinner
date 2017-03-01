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

function getProtein(mealId) {
  return Meals()
    .where('meals.mealId', parseInt(mealId)).first()
    .join('proteins', 'proteins.proteinId', 'meals.proteinId')
    .select('proteins.proteinName')
}


module.exports = {
  getAll, getSingle, getSides, getProtein
};