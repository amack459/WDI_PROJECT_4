module.exports = {
  port: process.env.PORT || 8000,
  databaseUrl: process.env.MONGOLAB_URI || 'mongodb://localhost/studioVibes',
  secret: 'notVerySecret'
}
