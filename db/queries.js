var {knex} = require('./knex.js');
var bookshelf = require('bookshelf')(knex); 

const Meal = require('../models/meals.js')

//console.log("Meal", Meal)

function Meals() {
  return knex('meals');
}

// *** queries *** //

function getAll() {
  return Meals().select();
}

function getSingle(mealId) {
  //return Meals().where('mealId', parseInt(mealId)).first();

  return Meal
  .where('mealId', parseInt(mealId))
  .fetch()
  // .then(function(model) {
  //   console.log(model.attributes)
  //   return model.attributes
  // });
}

// User.where('id', 1).fetch({withRelated: ['posts.tags']}).then(function(user) {
//   console.log(user.related('posts').toJSON());
// }).catch(function(err) {
//   console.error(err);
// });

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