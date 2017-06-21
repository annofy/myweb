const express = require('express'),
  admin = express(),
  utils = require('../utils/utils'),
  adminRoutes = require('./admin');

module.exports = app => {

  adminRoutes(admin)
  app.use('/admin', utils.isAdmin, admin)
  app.use('/file', require('./file'))
  app.use('/user', require('./admin/user'))
  app.use((req, res) => {
    if (!res.headersSent) {
      res.render('404', {
        title: '404'
      })
    }
  })
}