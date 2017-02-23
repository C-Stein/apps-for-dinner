
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('proteins').del()
    .then(function () {
      // Inserts seed entries
      return knex('proteins').insert([
        {proteinId: 1, proteinName: 'beef'},
        {proteinId: 2, proteinName: 'chicken'},
        {proteinId: 3, proteinName: 'tofu'}
      ]);
    });
};
