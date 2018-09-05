const database = require('./database-connection')

module.exports = {
  listAuthors() {
    return database('authors')
  },
  readAuthors(id) {
    return database('authors')
      .select()
      .where('id', id)
      .first()
  },
  createAuthors(authors) {
    return database('authors')
      .insert(authors)
      .returning('*')
      .then(record => record[0])
  },
  updateAuthors(id, author) {
    return database('authors')
      .update(authors)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  deleteAuthors(id) {
    return database('authors')
      .delete()
      .where('id', id)
  },
  listBooks() {
    return database('books')
  },
  readBooks(id) {
    return database('books')
      .select()
      .where('id', id)
      .first()
  },
  createBooks(books) {
    return database('books')
      .insert(books)
      .returning('*')
      .then(record => record[0])
  },
  updateBooks(id, books) {
    return database('books')
      .update(books)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  deleteBooks(id) {
    return database('books')
      .delete()
      .where('id', id)
  },
  readBoth() {
    return database('books_authors')
      .join(
        'books',
        'books_authors.booksId',
        '=',
        'books.id'
      )
      .join(
        'authors',
        'books_authors.authorsId',
        '=',
        'authors.id'
      )
      .select({
        bookId: 'book.id',
        Title: 'books.Title',
        Genre: 'books.Genre',
        // Description: "book.Description",
        CoverUrl: 'books.bookCoverURL',
        FirstName: 'authors.authFirst',
        LastName: 'authors.authLast',
        // Biography: "author.Biography",
        // Portrait: "author.Portrait"
      })
  },
}