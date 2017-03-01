const { bookshelf } = require('../db/knex.js')

const Protein = bookshelf.Model.extend({
  tableName: 'proteins'
})

module.exports = Protein