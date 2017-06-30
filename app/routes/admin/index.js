module.exports = app => {
  app.use('/articles', require('./articles'))
  app.use('/category', require('./category'))
  app.use('/entity', require('./entity'))
}