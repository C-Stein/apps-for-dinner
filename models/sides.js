const { bookshelf } = require('../db/knex.js')

const Side = bookshelf.Model.extend({
  tableName: 'sides'
})

module.exports = Side