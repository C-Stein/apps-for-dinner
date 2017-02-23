
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sideSelections').del()
    .then(function () {
      // Inserts seed entries
      return knex('sideSelections').insert([
        {sideSelectionId: 1, mealId: 2, sideId: 1},
        {sideSelectionId: 2, mealId: 1, sideId: 2},
        {sideSelectionId: 3, mealId: 3, sideId: 2},
        {sideSelectionId: 4, mealId: 3, sideId: 3},
        {sideSelectionId: 5, mealId: 3, sideId: 1}
      ]);
    });
};
