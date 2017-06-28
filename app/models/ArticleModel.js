const mongoose = require('mongoose'),
  Schema = require('../schemas/Schemas'),
  ArticleModel = mongoose.model('article', Schema.Article);


module.exports = ArticleModel;