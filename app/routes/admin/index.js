module.exports = app => {
  app.use('/articles', require('./articles'))
  app.use('/category', require('./category'))
}