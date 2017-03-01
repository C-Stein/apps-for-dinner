const { bookshelf } = require('../db/knex.js')

const Meal = bookshelf.Model.extend({
  tableName: 'meals'
})

module.exports = Meal

// // console.log("bookshelf in model", bookshelf );

// const Contact = bookshelf.Model.extend({
//   tableName: 'contacts'
// });

// module.exports = Contact;