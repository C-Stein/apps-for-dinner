const { bookshelf } = require('../db/knex.js')

const SideSelection = bookshelf.Model.extend({
  tableName: 'sideSelections'
})

module.exports = SideSelection