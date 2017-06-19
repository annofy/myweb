const mongoose = require('mongoose'),
  ArticleSchema = require('../schemas/Article'),
  ArticleModel = mongoose.model('article', ArticleSchema);


module.exports = ArticleModel;