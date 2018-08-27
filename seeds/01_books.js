
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, bookTitle: 'Python in a Nutshell', bookGenre: '', bookDescription: '', bookCoverURL: '', firstAuthor: '', lastAuthor: '', authBio: ''  },
        {id: 2, bookTitle: 'Think Python', bookGenre: '', bookDescription: '', bookCoverURL: '', firstAuthor: '', lastAuthor: '', authBio: ''  },
        {id: 3, bookTitle: 'Learning React Native', bookGenre: '', bookDescription: '', bookCoverURL: '', firstAuthor: '', lastAuthor: '', authBio: ''  },
        {id: 4, bookTitle: `You Don't Know JS: ES6 & Beyond`, bookGenre: '', bookDescription: '', bookCoverURL: '', firstAuthor: '', lastAuthor: '', authBio: ''  },
        {id: 5, bookTitle: `You Don't Know JS: Scope & Closures`, bookGenre: '', bookDescription: '', bookCoverURL: '', firstAuthor: '', lastAuthor: '', authBio: ''  },
        {id: 6, bookTitle: `You don't know JS: Async & Performance`, bookGenre: '', bookDescription: '', bookCoverURL: '', firstAuthor: '', lastAuthor: '', authBio: ''  },
      ])
    })
}
