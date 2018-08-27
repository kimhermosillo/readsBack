
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function (table) {
    table.increments()
    table.text('authFirst')
    table.text('authLast')
    table.text('picURL')
    table.text('bio')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors')
}
