// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/reads',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },

}
