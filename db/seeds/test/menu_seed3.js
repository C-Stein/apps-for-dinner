
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sides').del()
    .then(function () {
      // Inserts seed entries
      return knex('sides').insert([
        {sideId: 1, sideName: 'potatoes'},
        {sideId: 2, sideName: 'green beans'},
        {sideId: 3, sideName: 'side salad'}
      ]);
    });
};
