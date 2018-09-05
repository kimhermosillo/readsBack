

exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_authors', table => {
    table.increments('id').primary()
    table.text('bookId')
    table.text('authorId')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books_authors')
}