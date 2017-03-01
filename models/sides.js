const { bookshelf } = require('../db/knex.js')

const Side = bookshelf.Model.extend({
  tableName: 'sides',
  meals: function() {
    return this.belongsToMany(Meal)
  }
})

module.exports = Side