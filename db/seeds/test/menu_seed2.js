
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {mealId: 1, mealName: 'special #1', proteinId:  2},
        {mealId: 2, mealName: 'special #2', proteinId:  3},
        {mealId: 3, mealName: 'special #3', proteinId:  1}
      ]);
    });
};
