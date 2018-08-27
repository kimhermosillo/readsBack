
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments()
    table.text('bookTitle')
    table.text('bookGenre')
    table.text('bookDescription')
    table.text('bookCoverURL')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
}
