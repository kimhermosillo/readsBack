exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('books_authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('books_authors').insert([
        { 
          id: 1, 
          bookId: 1, 
          authorId: 1, 
        },
        { 
          id: 2, 
          bookId: 2, 
          authorId: 2, 
        },
        { 
          id: 3, 
          bookId: 3, 
          authorId: 3, 
        },
        { 
          id: 4, 
          bookId: 4, 
          authorId: 4, 
        },
        { 
          id: 5, 
          bookId: 5, 
          authorId: 5, 
        },
        { 
          id: 6, 
          bookId: 6, 
          authorId: 6, 
        },
      ])
    }).then(() => {
      return knex.raw('ALTER SEQUENCE books_authors_id_seq RESTART WITH 5;')
    })
}