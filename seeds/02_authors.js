
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, authFirst: 'rowValue1'},
        {id: 2, authFirst: 'rowValue2'},
        {id: 3, authFirst: 'rowValue3'},
        {id: 4, authFirst: 'rowValue2'},
        {id: 5, authFirst: 'rowValue2'},
        {id: 6, authFirst: 'rowValue2'},
      ])
    })
}
