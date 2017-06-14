const express = require('express'),
  admin = express(),
  adminRoutes = require('./admin');

module.exports = app => {

  adminRoutes(admin)
  app.use('/admin', admin)
  app.use('/file', require('./file'))
  app.use((req, res) => {
    if (!res.headersSent) {
      res.render('404', {
        title: '404'
      })
    }
  })
}