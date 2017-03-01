const { bookshelf } = require('../db/knex.js')

const Meal = bookshelf.Model.extend({
  tableName: 'meals',
  sides: function() {
    return this.belongsToMany(Side)
  }
})

module.exports = Meal

// var Book = bookshelf.Model.extend({
//   tableName: 'books',
//   authors: function() {
//     return this.belongsToMany(Author);
//   }
// });

// var Author = bookshelf.Model.extend({
//   tableName: 'authors',
//   books: function() {
//     return this.belongsToMany(Book);
//   }
// });