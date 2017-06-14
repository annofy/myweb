module.exports = app => {
  app.use('/article', require('./articles'))
  app.use('/category', require('./category'))
}